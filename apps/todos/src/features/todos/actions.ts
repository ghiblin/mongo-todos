import types, {
  AddNewTodo,
  AddNewTodoAsync,
  AddNewTodoAsyncPayload,
  AddNewTodoPayload,
  DeleteTodo,
  DeleteTodoPayload,
  FetchTodosFailure,
  FetchTodosFailurePayload,
  FetchTodosRequest,
  FetchTodosSuccess,
  FetchTodosSuccessPayload,
  ToggleTodo,
  ToggleTodoPayload,
} from './types';

export const fetchTodosRequest = (): FetchTodosRequest => ({
  type: types.FETCH_TODOS_REQUEST,
});

export const fetchTodosSuccess = (
  payload: FetchTodosSuccessPayload
): FetchTodosSuccess => ({
  type: types.FETCH_TODOS_SUCCESS,
  payload,
});

export const fetchTodosFailure = (
  payload: FetchTodosFailurePayload
): FetchTodosFailure => ({
  type: types.FETCH_TODOS_FAILURE,
  payload,
});

export const addNewTodoAsync = (payload: AddNewTodoAsyncPayload): AddNewTodoAsync => ({
  type: types.ADD_NEW_TODO_ASYNC,
  payload,
})

export const addNewTodo = (payload: AddNewTodoPayload): AddNewTodo => ({
  type: types.ADD_NEW_TODO,
  payload,
});

export const toggleTodo = (payload: ToggleTodoPayload): ToggleTodo => ({
  type: types.TOGGLE_TODO,
  payload,
});

export const deleteTodo = (payload: DeleteTodoPayload): DeleteTodo => ({
  type: types.DELETE_TODO,
  payload,
});
