import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer';
import {
  addNewTodo,
  deleteTodo,
  fetchTodosRequest,
  toggleTodo,
} from '../features/todos/actions';
import TodoList from '../features/todos/components/todo-list';
import { Todo } from '@mongo-todos/api-interfaces';

export const App = () => {
  const dispatch = useDispatch();
  const { fetching, todos, error } = useSelector(
    (state: RootState) => state.todos
  );

  const dispatchAddNewTodo = (title: string) => dispatch(addNewTodo({ title }));
  const dispatchToggleTodo = (id: Todo['id']) => dispatch(toggleTodo({ id }));
  const dispatchDeleteTodo = (id: Todo['id']) => dispatch(deleteTodo({ id }));

  useEffect(() => {
    dispatch(fetchTodosRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetching) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <TodoList
      todos={todos}
      addNewTodo={dispatchAddNewTodo}
      toggleTodo={dispatchToggleTodo}
      deleteTodo={dispatchDeleteTodo}
    />
  );
};

export default App;
