import { createReducer } from 'redux-create-reducer';
import { auth } from 'constant';

const initialState = {
  isAuthenticated: false,
};

export default createReducer(initialState, {
  [auth.SUCCESS]: state => ({ ...state, isAuthenticated: true }),
  [auth.FAIL]: state => ({ ...state, isAuthenticated: false }),
});
