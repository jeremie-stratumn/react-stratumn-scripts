import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from 'containers';
import { configureStore } from 'store';

ReactDOM.render(
  <Root {...configureStore()} />,
  document.getElementById('root')
);
