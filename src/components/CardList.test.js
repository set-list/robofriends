import { shallow, mount, render } from 'enzyme';
//mount unlike shallow does a full render and actually
//mounts the component on a dom just like react does,
//which means tests can effect each other if they're
//all using the same dom. Very rare that you use mount
//because you want to keep your tests as clean and contained
//as possible.
//render renders react components to a static html instead of a real dom
//render can be thought of as in between shallow and mount, it doesn't need
//a full dom but will also render child components if you need to test those
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id:1,
      name:'John Snow',
      email:'john@gmail.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})
