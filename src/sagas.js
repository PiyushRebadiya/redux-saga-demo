// sagas.js

import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* incrementAsync() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos/1');
    yield put({ type: 'API_CALL' , data: response.data});
  } catch (error) {
    console.log('error', error)
  }
  // yield new Promise(resolve => setTimeout(resolve, 1000));
}

export function* countWatcherSaga() {
  yield takeEvery('API_CALL_ASYNC', incrementAsync);
}
