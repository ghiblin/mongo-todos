import { Todo } from '@mongo-todos/api-interfaces';

// Constants
const FETCH_TODOS_REQUEST = <const>'todos/FETCH_TODOS_REQUEST';
const FETCH_TODOS_SUCCESS = <const>'todos/FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAILURE = <const>'todos/FETCH_TODOS_FAILURE';

export default {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
};

// State
export type TodosState = {
  fetching: boolean;
  todos: Todo[];
  error: string | null;
};

// Actions
export type FetchTodosRequest = {
  type: typeof FETCH_TODOS_REQUEST;
};

export type FetchTodosSuccess = {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: FetchTodosSuccessPayload;
};

export type FetchTodosFailure = {
  type: typeof FETCH_TODOS_FAILURE;
  payload: FetchTodosFailurePayload;
};

export type FetchTodosSuccessPayload = {
  todos: Todo[];
};

export type FetchTodosFailurePayload = {
  error: string;
};

export type TodosActions =
  | FetchTodosRequest
  | FetchTodosSuccess
  | FetchTodosFailure;
