import { Todo } from '@mongo-todos/api-interfaces';
import TodoInput from './todo-input';
import TodoItem from './todo-item';

export type TodoListProps = {
  todos: Todo[];
  addNewTodo: (title: string) => void;
  toggleTodo: (id: Todo['_id']) => void;
  deleteTodo: (id: Todo['_id']) => void;
};

export default function TodoList({
  todos,
  addNewTodo,
  toggleTodo,
  deleteTodo,
}: TodoListProps) {
  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoInput saveTodo={addNewTodo} />
      </header>
      <section className="main">
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggle={() => toggleTodo(todo._id)}
              onDelete={() => deleteTodo(todo._id)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
