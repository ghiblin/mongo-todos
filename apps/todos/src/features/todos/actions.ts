import types, {
  FetchTodosFailure,
  FetchTodosFailurePayload,
  FetchTodosRequest,
  FetchTodosSuccess,
  FetchTodosSuccessPayload,
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
