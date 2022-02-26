import { call, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { addNewTodo, fetchTodosFailure, fetchTodosSuccess } from './actions';
import { getTodos, createTodo, toggleTodo, deleteTodo } from './api';
import types, { AddNewTodoAsync, DeleteTodo, ToggleTodo } from './types';

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

export function* watcherCreateTodo() {
  yield takeLatest(types.ADD_NEW_TODO_ASYNC, workerCreateTodo);
}

function* workerCreateTodo(action: AddNewTodoAsync) {
  try {
    const response: SagaReturnType<typeof createTodo> = yield call(
      createTodo,
      action.payload.title
    );
    const { todo } = response.data;

    yield put(addNewTodo(todo));
  } catch (error) {
    // dispatch a failure action
    // TODO: use a specific action
    yield put(
      fetchTodosFailure({ error: String(error) || 'Failed to create todo' })
    );
  }
}

export function* watcherToggleTodo() {
  yield takeLatest(types.TOGGLE_TODO, workerToogleTodo);
}

function* workerToogleTodo(action: ToggleTodo) {
  try {
    const response: SagaReturnType<typeof toggleTodo> = yield call(
      toggleTodo,
      action.payload.id
    );
    const { todo } = response.data;

    // Using optimistic update, so I can ignore todo
    console.log('toggled todo from server:', todo);
  } catch (error) {
    // I should to undo toogle action, just ignore for now
    console.error('Failed to toggle todo:', error);
  }
}

export function* watcherDeleteTodo() {
  yield takeLatest(types.DELETE_TODO, workerDeleteTodo);
}

function* workerDeleteTodo(action: DeleteTodo) {
  try {
    // Using optimistic delete, so I can ignore response
    yield call(deleteTodo, action.payload.id);
  } catch (error) {
    // I should to undo delete action, just ignore for now
    console.error('Failed to delete todo:', error);
  }
}
