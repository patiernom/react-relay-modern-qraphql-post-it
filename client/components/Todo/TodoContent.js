import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const TodoContent = ({ text, timestamp }) => (
  <div>
    <div className={'content-text'}>{text}</div>
    <span className={'time'}>
      {moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
    </span>
  </div>
);

TodoContent.propTypes = {
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.number
};

TodoContent.defaultProps = {
  timestamp: 0
};

export default TodoContent;
