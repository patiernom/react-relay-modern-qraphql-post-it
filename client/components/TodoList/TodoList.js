import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { List, Grid, Cell } from 'react-mdl';
import Todo from '../Todo/TodoContainer';
import styles from './TodoList.scss';

class TodoList extends React.Component {
  renderTodos() {
    return this.props.viewer.todos.edges.map(edge =>
      <Todo
        key={edge.node.id}
        todo={edge.node}
        viewer={this.props.viewer}
      />
    );
  }
  render() {
    return (
      <section className={styles.root}>
        <Grid>
          <Cell col={12}>
            <List>
              {this.renderTodos()}
            </List>
          </Cell>
        </Grid>
      </section>
    );
  }
}

export default createFragmentContainer(TodoList, {
  viewer: graphql`
    fragment TodoList_viewer on User {
      todos(
        first: 2147483647  # max GraphQLInt
      ) @connection(key: "TodoList_todos") {
        edges {
          node {
            id,
            timestamp
            ...TodoContainer_todo,
          },
        },
      },
      id,
      ...TodoContainer_viewer,
    }
  `,
});
