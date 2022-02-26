import * as express from 'express';
import { json } from 'body-parser';
import * as path from 'path';
import * as mongoose from 'mongoose';
import { addTodosRoutes } from './app/todos';

const CLIENT_BUILD_PATH = path.join(__dirname, '../todos');

const app = express();
app.use(express.static(CLIENT_BUILD_PATH));
app.use(json());

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('connected to database');
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
