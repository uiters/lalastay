import { FETCH_SUCCESS, FETCH_ERROR, CLEAR, CLOSE, STATUS_COMPARE } from './constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.payload;
    case FETCH_ERROR:
      return {};
    case CLEAR:
      return {};
    case CLOSE:
      return action.payload;
    case STATUS_COMPARE:
      console.log('check', action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
