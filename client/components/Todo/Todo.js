import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ListItem, ListItemContent, ListItemAction, Icon, Tooltip } from 'react-mdl';
import 'react-mdl/extra/material';
import RemoveTodoMutation from '../../mutations/RemoveTodoMutation';
import RenameTodoMutation from '../../mutations/RenameTodoMutation';
import TodoTextEdit from '../TodoTextEdit/TodoTextEdit';
import TodoContent from './TodoContent';
import utils from '../../lib/utils';
import styles from './Todo.scss';

class Todo extends React.Component {
  state = {
    isEditing: false,
  };

  onDeleleClick = () => {
    this.removeTodo();
  };

  onClick = () => {
    this.setEditMode(true);
  };

  onTextInputCancel = () => {
    this.setEditMode(false);
  };

  onTextInputDelete = () => {
    this.setEditMode(false);
    this.removeTodo();
  };

  onTextInputSave = (text) => {
    this.setEditMode(false);
    RenameTodoMutation.commit(
      this.props.relay.environment,
      text,
      this.props.todo,
    );
  };

  setEditMode = (shouldEdit) => {
    this.setState({ isEditing: shouldEdit });
  };

  removeTodo() {
    RemoveTodoMutation.commit(
      this.props.relay.environment,
      this.props.todo,
      this.props.viewer,
    );
  }

  renderTextInput() {
    return (
      <TodoTextEdit
        className='edit'
        commitOnBlur={true}
        initialValue={this.props.todo.text}
        onCancel={this.onTextInputCancel}
        onDelete={this.onTextInputDelete}
        onSave={this.onTextInputSave}
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
          <ListItemContent avatar={<div>{utils.getAvatar(this.props.viewer)}</div>}>
            {this.state.isEditing && this.renderTextInput()}
            <TodoContent text={this.props.todo.text} timestamp={this.props.todo.timestamp} />
          </ListItemContent>
          <ListItemAction>
            <Tooltip label={'Edit'} position={'top'}>
              <button className={'edit-todo'} onClick={this.onClick}><Icon name='edit' /></button>
            </Tooltip>
          </ListItemAction>
          <ListItemAction>
            <Tooltip label={'Delete'} position={'top'}>
              <button className={'delete-todo'} onClick={this.onDeleleClick}><Icon name='delete' /></button>
            </Tooltip>
          </ListItemAction>
        </ListItem>
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired,
  relay: PropTypes.object.isRequired
};

Todo.defaultProps = {};

export default Todo;
