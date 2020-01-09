import { FETCH, FETCH_SUCCESS, FETCH_ERROR, STATUS_COMPARE } from './constants';

export const fetchAction = () => ({
  type: FETCH,
});

export const fetchSuccessAction = repos => ({
  type: FETCH_SUCCESS,
  payload: repos,
});

export const fetchErrorAction = error => ({
  type: FETCH_ERROR,
  payload: error,
});

export const compareAction = status => ({
  type: STATUS_COMPARE,
  payload: status,
});
