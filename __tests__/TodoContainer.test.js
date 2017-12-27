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
describe('Testing Relay Container', () => {
  it('check props of React Relay Container', () => {
    const container = ReactTestUtils.renderIntoDocument(<Todo {...fixtures} />);

    expect(container.props.todo.text).toBe(fixtures.todo.text);
  });
});
