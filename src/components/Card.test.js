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
import Card from './Card';

it('expect to render Card component', () => {
  //expect(shallow(<Card />).length).toEqual(1);
  expect(shallow(<Card />)).toMatchSnapshot();
})
