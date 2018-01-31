import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';

import history from 'store/history';
import globalStyles from 'style';
import 'style/style.css';
import { App } from './';

const Root = ({ store }) => (
  <MuiThemeProvider theme={globalStyles}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </MuiThemeProvider>
);

Root.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  store: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default Root;
