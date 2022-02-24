import { Todo } from '@mongo-todos/api-interfaces';
import axios from 'axios';

export const getTodos = () => axios.get<{ todos: Todo[] }>('/api/todos');
