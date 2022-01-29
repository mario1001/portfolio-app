import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsComponent from './ProjectsComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectsComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});