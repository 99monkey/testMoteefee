import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Progress from './Progress';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { render, mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


it('number of active states', () => {
  const component = mount(<Progress states={['a', 'b', 'c']} active={1} onClick={() => {}}/>) ;
  //expect(component.find('.progress-entry').length).toEqual(3);
  expect(component.find('.__active').length).toEqual(2);
});




