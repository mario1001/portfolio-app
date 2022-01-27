import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioComponent from './PortfolioComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});