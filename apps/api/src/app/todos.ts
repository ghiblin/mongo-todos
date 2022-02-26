// import { Todo } from '@mongo-todos/api-interfaces';
import { Todo } from '@mongo-todos/api-interfaces';
import { Express, Request, Response } from 'express';
import { body, param, validationResult } from 'express-validator';
import { TodoModel } from '../models/todo';

export function addTodosRoutes(app: Express) {
  app.get('/api/todos', async (req: Request, res: Response) => {
    const todos = await TodoModel.find();
    res.json({ todos });
  });
  app.post(
    '/api/todos',
    body('title').isLength({ min: 3 }),
    async (
      req: Request<Record<string, unknown>, Todo, { title: string }>,
      res: Response
    ) => {
      if (!validationResult(req).isEmpty()) {
        return res.status(422).json(validationResult(req));
      }
      const { title } = req.body;
      try {
        const model = new TodoModel({ title });
        await model.save();
        return res.json({ todo: model });
      } catch (e) {
        console.error(e);
        return res.status(500).send('Internal Server Error');
      }
    }
  );

  app.patch(
    '/api/todos/:id/toggle',
    param('id').isMongoId(),
    async (
      req: Request<{ id: string }, Todo, Partial<Todo>>,
      res: Response
    ) => {
      if (!validationResult(req).isEmpty()) {
        return res.status(422).json(validationResult(req));
      }
      const { id } = req.params;
      console.log(`TOGGLE todo ${id}`);

      const todo = await TodoModel.findById(id);
      if (!todo) {
        console.log(`sorry, todo not found!`);
        return res.status(404).json({ error: 'Todo not found' });
      }
      console.log(`trying to toggle todo ${JSON.stringify(todo)}...`);
      await TodoModel.updateOne(
        { _id: id },
        { isCompleted: !todo.isCompleted }
      );
      console.log(`done!`);
      const { _id, title, isCompleted } = todo;
      return res.json({ todo: { _id, title, isCompleted: !isCompleted } });
    }
  );

  app.delete(
    '/api/todos/:id',
    param('id').isMongoId(),
    async (req: Request<{ id: string }, void, void>, res: Response) => {
      if (!validationResult(req).isEmpty()) {
        return res.status(422).json(validationResult(req));
      }

      const { id } = req.params;
      console.log(`DELETE todo ${id}`);
      const todo = await TodoModel.findById(id);
      if (!todo) {
        console.log(`sorry, todo not found!`);
        return res.status(404).json({ error: 'Todo not found' });
      }
      console.log(`trying to delete todo ${JSON.stringify(todo)}...`);
      await TodoModel.deleteOne({ _id: id });
      console.log(`done!`);
      return res.status(200).end();
    }
  );
}
