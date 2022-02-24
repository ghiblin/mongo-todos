import { Todo } from '@mongo-todos/api-interfaces';
import { Express, Request, Response } from 'express';

const todos: Todo[] = [
  {
    id: '1',
    title: 'Do Home Assignment',
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Brush my teeth',
    isCompleted: true,
  },
];

export function addTodosRoutes(app: Express) {
  app.get('/api/todos', (req: Request, res: Response) => {
    res.json({ todos });
  });
}
