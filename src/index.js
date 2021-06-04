import App from 'App';
import { GlobalStyles } from 'global-styles';
import React from 'react';
import { render } from 'react-dom';

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
