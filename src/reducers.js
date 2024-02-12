// reducers.js

import { combineReducers } from 'redux';

const initialState = {
  count: 0
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'API_CALL':
      return { ...state,data: action.data };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  count: countReducer
});

export default rootReducer;
