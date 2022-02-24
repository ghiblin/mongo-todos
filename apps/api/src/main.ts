import * as express from 'express';
import * as path from 'path';
import { Message } from '@mongo-todos/api-interfaces';
import { addTodosRoutes } from './app/todos';

const CLIENT_BUILD_PATH = path.join(__dirname, '../todos');

const app = express();
app.use(express.static(CLIENT_BUILD_PATH));

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});
addTodosRoutes(app);

app.get('*', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT, () => {
  console.log('Listening at http://localhost:' + PORT + '/api');
});
server.on('error', console.error);
