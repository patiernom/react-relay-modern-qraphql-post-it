import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell, Button, Textfield, Icon } from 'react-mdl';
import PropTypes from 'prop-types';
import styles from './TodoTextInput.scss';

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

export default class TodoTextInput extends React.Component {
  static defaultProps = {

  };
  static propTypes = {
    onSave: PropTypes.func.isRequired
  };

  state = {
    form: {
      text: ''
    }
  };

  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }

  onChange = (e) => {
    e.persist();

    this.setState({ form: { text: e.target.value } });
  };

  onKeyDown = (e) => {
    if (e.keyCode === ESC_KEY_CODE) {
      ReactDOM.findDOMNode(this).blur();
    } else if (e.keyCode === ENTER_KEY_CODE) {
      this.commitChanges();
    }
  };

  commitChanges = () => {
    const value = this.state.form.text.trim();
    if (!value) return;

    if (value !== '') {
      this.props.onSave(value);
      this.setState({ form: { text: '' } });
    }
  };

  render() {
    return (
      <div className={styles.root}>
        <Grid>
          <Cell col={11}>
            <Textfield
              onChange={this.onChange}
              label='Enter your message...'
              onKeyDown={this.onKeyDown}
              value={this.state.form.text}
            />

          </Cell>
          <Cell col={1}>
            <Button className={'addTodo'} raised accent onClick={this.commitChanges}><Icon name={'send'} /></Button>
          </Cell>
        </Grid>
      </div>
    );
  }
}
