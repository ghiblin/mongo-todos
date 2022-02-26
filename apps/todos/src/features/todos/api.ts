import { Todo } from '@mongo-todos/api-interfaces';
import axios from 'axios';

export const getTodos = () => axios.get<{ todos: Todo[] }>('/api/todos');
export const createTodo = (title: string) =>
  axios.post<{ todo: Todo }>('/api/todos', { title });
export const toggleTodo = (id: Todo['_id']) =>
  axios.patch<{ todo: Todo }>(`/api/todos/${id}/toggle`);
export const deleteTodo = (id: Todo['_id']) => axios.delete(`/api/todos/${id}`);
