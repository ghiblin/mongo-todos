import { Todo } from '@mongo-todos/api-interfaces';

export type TodoItemProps = {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={`${todo.isCompleted ? 'completed' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={onToggle}
        />
        <label>{todo.title}</label>
        <button className="destroy" onClick={onDelete} />
      </div>
      <input className="edit" />
    </li>
  );
}
