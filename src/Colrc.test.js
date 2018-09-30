import React from 'react';
import ReactDOM from 'react-dom';
import Colrc from './Colrc';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Colrc />, div);
  ReactDOM.unmountComponentAtNode(div);
});
