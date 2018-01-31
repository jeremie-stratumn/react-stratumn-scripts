import { push } from 'react-router-redux';
import { auth } from 'constant';

export const login = () => dispatch => {
  dispatch({ type: auth.SUCCESS });
  dispatch(push('/'));
};

export const logout = () => dispatch => {
  dispatch({ type: auth.FAIL });
  dispatch(push('/login'));
};
