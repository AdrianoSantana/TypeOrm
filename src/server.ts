import dotenv from 'dotenv'
import app from './app';
import 'reflect-metadata';
import './database';

dotenv.config()

const port = 3000
app.listen(port, () => {
  console.log(`🏃 Running Server on port ${port}`);
});
