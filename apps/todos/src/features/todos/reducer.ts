import types, { TodosActions, TodosState } from './types';

const initialState: TodosState = {
  fetching: false,
  todos: [],
  error: null,
};

export default (state = initialState, action: TodosActions): TodosState => {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST:
      // start fetching => fetching = true
      return {
        ...state,
        fetching: true,
      };

    case types.FETCH_TODOS_SUCCESS:
      // success
      return {
        ...state,
        fetching: false,
        todos: action.payload.todos,
        error: null,
      };

    case types.FETCH_TODOS_FAILURE:
      // failure
      return {
        ...state,
        fetching: false,
        todos: [],
        error: action.payload.error,
      };

    default:
      return state;
  }
};
