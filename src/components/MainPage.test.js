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
import MainPage from './MainPage';


let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage { ...mockProps }/>)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  };
  const filteredRobots = [];
  const wrapper2 = shallow(<MainPage { ...mockProps2 }/>);
  expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots);
})

it('renders Loading in event of pending', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: true
  };
  const wrapper3 = shallow(<MainPage { ...mockProps3 }/>);
  expect(wrapper3.instance().props.isPending).toEqual(true);

})
