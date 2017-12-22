import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { Content } from 'react-mdl';
import 'normalize.css/normalize.css';
import 'react-mdl/extra/css/material.cyan-red.min.css';
import 'react-mdl/extra/material';
import AddTodoMutation from '../../mutations/AddTodoMutation';
import TodoList from '../TodoList/TodoList';
import TodoTextInput from '../TodoTextInput/TodoTextInput';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './App.scss';

class TodoApp extends React.Component {
  _handleTextInputSave = (text) => {
    AddTodoMutation.commit(
      this.props.relay.environment,
      text,
      this.props.viewer,
    );
  };

  render() {
    const getUserTitle = () => {
      if (this.props.viewer.firstName &&
        this.props.viewer.lastName &&
        this.props.viewer.firstName.length > 0 &&
        this.props.viewer.lastName.length > 0
      ) {
        return `${this.props.viewer.firstName} ${this.props.viewer.lastName}`;
      } else {
        return this.props.viewer.username;
      }
    };

    const hasTodos = this.props.viewer.totalCount > 0;
    const msgNumber = this.props.viewer.totalCount;
    const title = 'Post-it Relay';
    const user = {
      username: this.props.viewer.username,
      email:  this.props.viewer.email,
      title: getUserTitle()
    };

    return (
      <div className={styles.root}>
        <Navbar title={title} msgNumber={msgNumber} user={user}>
          <Content>
            <div className={styles.content}>
              {hasTodos &&
                <TodoList viewer={this.props.viewer} />
              }
              <TodoTextInput
                onSave={this._handleTextInputSave}
              />
            </div>
          </Content>
          <Footer viewer={this.props.viewer} />
        </Navbar>
      </div>
    );
  }
}

export default createFragmentContainer(TodoApp, {
  viewer: graphql`
    fragment TodoApp_viewer on User {
      id,
      firstName,
      lastName
      username
      email
      totalCount,
      ...TodoList_viewer,
      ...Footer_viewer,
    }
  `,
});
