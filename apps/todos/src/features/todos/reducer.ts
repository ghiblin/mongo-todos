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

    case types.ADD_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case types.TOGGLE_TODO: {
      const idx = state.todos.findIndex(
        (todo) => todo._id === action.payload.id
      );
      return idx > -1
        ? {
            ...state,
            todos: [
              ...state.todos.slice(0, idx),
              {
                ...state.todos[idx],
                isCompleted: !state.todos[idx].isCompleted,
              },
              ...state.todos.slice(idx + 1),
            ],
          }
        : state;
    }

    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload.id),
      };

    default:
      return state;
  }
};
