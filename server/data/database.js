/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import crypto from 'crypto';
import low from 'lowdb';
import Memory from 'lowdb/adapters/Memory';

class User {
  constructor(id, firstName, lastName, username, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
  }
}

class Todo {
  constructor(id, userId, timestamp, text, complete) {
    this.id = id;
    this.text = text;
    this.userId = userId;
    this.timestamp = timestamp;
    this.complete = complete;
  }
}

// Mock authenticated ID
const VIEWER_ID = '1';

// Mock user data
const defaultUser = new User('1', 'Marco', 'Patierno', 'patiernom', 'marco_patienro@msn.com');

// Mock todo data
const todosById = {};
const todoIdsByUser = {
  [VIEWER_ID]: [],
};
let nextTodoId = 0;
const defaultTodos = [
  new Todo(crypto.randomBytes(10).toString('hex'), VIEWER_ID, Date.now(), 'example 1', false),
  new Todo(crypto.randomBytes(10).toString('hex'), VIEWER_ID, Date.now(), 'example 2', false),
  new Todo(crypto.randomBytes(10).toString('hex'), VIEWER_ID, Date.now(), 'example 3', false)
];

const db = low(new Memory());
db
  .defaults({ users: [defaultUser], todos: defaultTodos })
  .write();

const getUser = async (id) => {
  return db
    .get('users')
    .find(user => user.id === id)
    .value();
};

const getViewer = () => {
  return getUser(VIEWER_ID);
};

const addTodo = (text, complete) => {
  const todo = db
    .get('todos')
    .push(new Todo(crypto.randomBytes(10).toString('hex'), VIEWER_ID, Date.now(), text, complete))
    .last()
    .write();

  return todo.id;
};

const getTodo = async (id) => {
  return db.get('todos')
    .find(todo => todo.id === id)
    .value();
};

export function changeTodoStatus(id, complete) {
  const todo = getTodo(id);
  todo.complete = complete;
}

const getTodos = async (userId) => {
  return db
    .get('todos')
    .filter(todo => todo.userId === userId)
    .sortBy('timestamp')
    .value();
};

const countTodos = async (userId) => {
  return db
    .get('todos')
    .filter(todo => todo.userId === userId)
    .size()
    .value();
};

const removeTodo = async (id) => {
  return db.get('todos')
    .remove(todo => todo.id === id)
    .write();
};

const renameTodo = async (id, text) => {
  return db.get('todos')
    .find(todo => todo.id === id)
    .assign({ text: text })
    .write();
};

export function removeCompletedTodos() {
  const todosToRemove = getTodos().filter(todo => todo.complete);
  todosToRemove.forEach(todo => removeTodo(todo.id));
  return todosToRemove.map(todo => todo.id);
}

export function markAllTodos(complete) {
  const changedTodos = [];
  getTodos().forEach(todo => {
    if (todo.complete !== complete) {
      todo.complete = complete;
      changedTodos.push(todo);
    }
  });
  return changedTodos.map(todo => todo.id);
}

export {
  User,
  Todo,
  getViewer,
  addTodo,
  getTodo,
  getTodos,
  countTodos,
  removeTodo,
  renameTodo
};
