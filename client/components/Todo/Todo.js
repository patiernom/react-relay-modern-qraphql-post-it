import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import classnames from 'classnames';
import { ListItem, List, ListItemContent, ListItemAction, Icon, Grid, Cell } from 'react-mdl';
import RemoveTodoMutation from '../../mutations/RemoveTodoMutation';
import RenameTodoMutation from '../../mutations/RenameTodoMutation';
import TodoTextEdit from '../TodoTextEdit/TodoTextEdit';
import styles from './Todo.scss';

class Todo extends React.Component {
  state = {
    isEditing: false,
  };
  _handleDestroyClick = () => {
    this._removeTodo();
  };
  _handleLabelDoubleClick = () => {
    this._setEditMode(true);
  };
  _handleTextInputCancel = () => {
    this._setEditMode(false);
  };
  _handleTextInputDelete = () => {
    this._setEditMode(false);
    this._removeTodo();
  };
  _handleTextInputSave = (text) => {
    this._setEditMode(false);
    RenameTodoMutation.commit(
      this.props.relay.environment,
      text,
      this.props.todo,
    );
  };
  _removeTodo() {
    RemoveTodoMutation.commit(
      this.props.relay.environment,
      this.props.todo,
      this.props.viewer,
    );
  }
  _setEditMode = (shouldEdit) => {
    this.setState({isEditing: shouldEdit});
  };
  renderTextInput() {
    return (
      <TodoTextEdit
        className="edit"
        commitOnBlur={true}
        initialValue={this.props.todo.text}
        onCancel={this._handleTextInputCancel}
        onDelete={this._handleTextInputDelete}
        onSave={this._handleTextInputSave}
      />
    );
  }
  render() {
    return (
      <div className={styles.root}>
        <ListItem
          key={this.props.todo.id}
          className={classnames({
            editing: this.state.isEditing
          })}
        >
          <ListItemContent icon='person'>
            <span className={'content-text'}>{this.props.todo.text} - {this.props.todo.timestamp}</span>
            {this.state.isEditing && this.renderTextInput()}
          </ListItemContent>
          <ListItemAction>
            <button onClick={this._handleLabelDoubleClick}><Icon name='edit' /></button>
          </ListItemAction>
          <ListItemAction>
            <button onClick={this._handleDestroyClick}><Icon name='delete' /></button>
          </ListItemAction>
        </ListItem>
      </div>
    );
  }
}

export default createFragmentContainer(Todo, {
  todo: graphql`
    fragment Todo_todo on Todo {
      timestamp
      id,
      text,
    }
  `,
  viewer: graphql`
    fragment Todo_viewer on User {
      id,
      totalCount,
    }
  `,
});
