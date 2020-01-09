import { FETCH, FETCH_SUCCESS, FETCH_ERROR, CLEAR, STATUS_COMPARE } from './constants';

export const fetchAction = name => ({
  type: FETCH,
  payload: name,
});

export const fetchSuccessAction = repo => ({
  type: FETCH_SUCCESS,
  payload: repo,
});

export const fetchErrorAction = error => ({
  type: FETCH_ERROR,
  payload: error,
});

export const clearAction = () => ({
  type: CLEAR,
});

export const close = value => ({
  type: CLEAR,
  payload: value,
});

export const compareAction = status => ({
  type: STATUS_COMPARE,
  payload: status,
});
