import { all, fork } from 'redux-saga/effects';
import {
  watcherFetchTodos,
  watcherCreateTodo,
  watcherToggleTodo,
  watcherDeleteTodo,
} from './features/todos/sagas';

export default function* rootSaga() {
  yield all([
    fork(watcherFetchTodos),
    fork(watcherCreateTodo),
    fork(watcherToggleTodo),
    fork(watcherDeleteTodo),
  ]);
}
