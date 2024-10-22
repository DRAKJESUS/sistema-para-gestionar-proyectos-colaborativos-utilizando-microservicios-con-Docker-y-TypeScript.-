import express from 'express';
import { createProject } from './controllers/projectController';

const app = express();
app.use(express.json());

app.post('/projects', createProject);

app.listen(3002, () => {
    console.log('Project Service running on port 3002');
});
