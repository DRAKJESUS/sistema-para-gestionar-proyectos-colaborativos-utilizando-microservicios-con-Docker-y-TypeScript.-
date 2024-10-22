import express from 'express';
import { login } from './controllers/authController';

const app = express();
app.use(express.json());

app.post('/login', login);

app.listen(3001, () => {
    console.log('Auth Service running on port 3001');
});

import express from 'express';
import { createTask } from './controllers/taskController';

const app = express();
app.use(express.json());

app.post('/tasks', createTask);

app.listen(3003, () => {
    console.log('Task Service running on port 3003');
});
