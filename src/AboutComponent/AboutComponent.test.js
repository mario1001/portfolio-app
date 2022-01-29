import React from 'react';
import ReactDOM from 'react-dom';
import AboutComponent from './AboutComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});