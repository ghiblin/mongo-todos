import { Todo } from '@mongo-todos/api-interfaces';

// Constants
const ADD_NEW_TODO = <const>'todos/ADD_NEW_TODO';
const ADD_NEW_TODO_ASYNC = <const>'todos/ADD_NEW_TODO_ASYNC';
const DELETE_TODO = <const>'todos/DELETE_TODO';
const FETCH_TODOS_REQUEST = <const>'todos/FETCH_TODOS_REQUEST';
const FETCH_TODOS_SUCCESS = <const>'todos/FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAILURE = <const>'todos/FETCH_TODOS_FAILURE';
const TOGGLE_TODO = <const>'todos/TOGGLE_TODO';

export default {
  ADD_NEW_TODO,
  ADD_NEW_TODO_ASYNC,
  DELETE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  TOGGLE_TODO,
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

// Add new todo
export type AddNewTodoAsync = {
  type: typeof ADD_NEW_TODO_ASYNC;
  payload: AddNewTodoAsyncPayload;
};

export type AddNewTodoAsyncPayload = {
  title: string;
};

export type AddNewTodo = {
  type: typeof ADD_NEW_TODO;
  payload: AddNewTodoPayload;
};

export type AddNewTodoPayload = Todo;

// Toggle todo
export type ToggleTodo = {
  type: typeof TOGGLE_TODO;
  payload: ToggleTodoPayload;
};

export type ToggleTodoPayload = {
  id: Todo['_id'];
};

// Delete todo
export type DeleteTodo = {
  type: typeof DELETE_TODO;
  payload: DeleteTodoPayload;
};

export type DeleteTodoPayload = {
  id: Todo['_id'];
};

export type TodosActions =
  | AddNewTodo
  | AddNewTodoAsync
  | DeleteTodo
  | FetchTodosRequest
  | FetchTodosSuccess
  | FetchTodosFailure
  | ToggleTodo;
