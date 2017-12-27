import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Todo from '../client/components/Todo/TodoContainer';

// relay graph
const fixtures = {
  viewer: {
    id: '007',
    firstName: 'James',
    lastName: 'Bond',
    totalCount: ''
  },
  todo: {
    id: '1',
    text: 'Buy Milk',
    timestamp: Date.now()
  }
};
test('Relay testing wrap', () => {
  const container = ReactTestUtils.renderIntoDocument(<Todo {...fixtures} />);

  expect(container.props.todo.text).toBe(fixtures.todo.text);
});
