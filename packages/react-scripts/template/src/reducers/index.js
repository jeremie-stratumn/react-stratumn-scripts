import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// import your reducers here
import auth from './auth';

export default combineReducers({
  router,
  // add your reducers here
  auth,
});
