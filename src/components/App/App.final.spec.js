import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderMap from 'streetMap';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(renderMap).toBeCalled();
});
