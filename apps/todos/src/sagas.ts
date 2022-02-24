import { all, fork } from 'redux-saga/effects';
import { watcherFetchTodos } from './features/todos/sagas';

export default function* rootSaga() {
  yield all([fork(watcherFetchTodos)]);
}
