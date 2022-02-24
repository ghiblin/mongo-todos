import { call, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { fetchTodosFailure, fetchTodosSuccess } from './actions';
import { getTodos } from './api';
import types from './types';

// watcher saga: watches for FETCH_TODOS_REQUEST dispatched to the store, starts worker saga
export function* watcherFetchTodos() {
  yield takeLatest(types.FETCH_TODOS_REQUEST, workerFetchTodos);
}

// worker saga: makes the API call
function* workerFetchTodos() {
  try {
    const response: SagaReturnType<typeof getTodos> = yield call(getTodos);
    const todos = response.data.todos;

    // dispatch a success action
    yield put(fetchTodosSuccess({ todos }));
  } catch (error) {
    // dispatch a failure action
    yield put(
      fetchTodosFailure({ error: String(error) || 'Failed to fetch todos' })
    );
  }
}
