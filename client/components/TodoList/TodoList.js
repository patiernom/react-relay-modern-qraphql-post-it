import React from 'react';
import PropTypes from 'prop-types';
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

TodoList.propTypes = {
  viewer: PropTypes.object.isRequired
};

TodoList.defaultProps = {};

export default TodoList;
