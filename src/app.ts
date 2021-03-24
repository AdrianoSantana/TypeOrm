import express from 'express';
import routes from './routes';
import classRouter from './routes/class.routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(classRouter)

export default app;
