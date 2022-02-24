import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer';
import { fetchTodosRequest } from '../features/todos/actions';

export const App = () => {
  const dispatch = useDispatch();
  const { fetching, todos, error } = useSelector(
    (state: RootState) => state.todos
  );

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
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title} - completed? {todo.isCompleted}
        </div>
      ))}
    </div>
  );
};

export default App;
