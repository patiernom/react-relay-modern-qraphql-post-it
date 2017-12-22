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
  constructor(id, userId, timestamp, text) {
    this.id = id;
    this.text = text;
    this.userId = userId;
    this.timestamp = timestamp;
  }
}

// Mock authenticated ID
const VIEWER_ID = '1';

// Mock user data
const defaultUser = new User('1', 'Marco', 'Patierno', 'patiernom', 'marco_patierno@msn.com');

// Mock todo data
const defaultTodos = [
  new Todo(crypto.randomBytes(10).toString('hex'), VIEWER_ID, Date.now(), 'example 1'),
  new Todo(crypto.randomBytes(10).toString('hex'), VIEWER_ID, Date.now(), 'example 2'),
  new Todo(crypto.randomBytes(10).toString('hex'), VIEWER_ID, Date.now(), 'example 3')
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
