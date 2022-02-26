import { Todo } from '@mongo-todos/api-interfaces';
import { Schema, model } from 'mongoose';

const schema = new Schema<Todo>({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

export const TodoModel = model<Todo>('Todo', schema);
