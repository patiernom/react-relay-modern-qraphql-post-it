import React from 'react';
import { mount } from 'enzyme';
import Todo from '../client/components/Todo/Todo';

describe('Todo component renders the todo', () => {

  it('Todo component renders the text of the todo', () => {
    const todo = { id: '1', userId: '1', text: 'Buy Milk', timestamp: Date.now() };
    const viewer = {
      id: '1',
      firstName: 'Marco',
      lastName: 'Patierno',
      username: 'patiernom',
      email: 'marco_patierno@msn.com'
    };
    const relay = { environment: {} };
    const wrapper = mount(<Todo todo={todo} viewer={viewer} relay={relay} />);
    const p = wrapper.find('.mdl-list__item .content-text');

    // console.log('wrapper', wrapper.debug());

    expect(p.text()).toBe('Buy Milk');
  });
});
