import React from 'react';
import renderer from 'react-test-renderer';
import TodoContent from '../client/components/Todo/TodoContent';

const dateTime = 1514309900222; // December 26th 2017, 6:38:20 pm

describe('Todo component renders the todo correctly', () => {
  it('renders correctly', () => {
    const todo = {text: 'Buy Milk', timestamp: dateTime };

    const rendered = renderer.create(<TodoContent text={todo.text} timestamp={todo.timestamp} />);

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});