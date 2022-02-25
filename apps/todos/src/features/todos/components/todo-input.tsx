import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';

export type TodoInputProps = {
  saveTodo: (title: string) => void;
};

export default function TodoInput({ saveTodo }: TodoInputProps) {
  const [value, setValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    saveTodo(value);
    setValue('');
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to done?"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
}
