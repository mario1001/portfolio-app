import React from 'react';
import ReactDOM from 'react-dom';
import BlogComponent from './BlogComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});