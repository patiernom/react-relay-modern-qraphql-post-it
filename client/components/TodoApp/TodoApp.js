import React from 'react';
import PropTypes from 'prop-types';
import { Content } from 'react-mdl';
import 'normalize.css/normalize.css';
import 'react-mdl/extra/css/material.cyan-red.min.css';
import 'react-mdl/extra/material';
import AddTodoMutation from '../../mutations/AddTodoMutation';
import TodoList from '../TodoList/TodoList';
import TodoTextInput from '../TodoTextInput/TodoTextInput';
import utils from '../../lib/utils';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './App.scss';

class TodoApp extends React.Component {
  onTextInputSave = (text) => {
    AddTodoMutation.commit(
      this.props.relay.environment,
      text,
      this.props.viewer,
    );
  };

  render() {
    const hasTodos = this.props.viewer.totalCount > 0;
    const msgNumber = this.props.viewer.totalCount;
    const title = 'Post-it Relay';
    const user = {
      username: this.props.viewer.username,
      email: this.props.viewer.email,
      title: utils.getUserTitle(this.props.viewer)
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
                onSave={this.onTextInputSave}
              />
            </div>
          </Content>
          <Footer viewer={this.props.viewer} />
        </Navbar>
      </div>
    );
  }
}

TodoApp.propTypes = {
  viewer: PropTypes.object.isRequired,
  relay: PropTypes.object.isRequired
};

TodoApp.defaultProps = {};

export default TodoApp;
