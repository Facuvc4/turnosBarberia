import express from 'express';
import 'dotenv/config';
import { connectDB } from './src/db/mongo';
import errorController from './src/controllers/error/index.controller';
import apiRouter from './src/routers/index.router';
import middlewares from './src/middlewares/index';

const app = express();
const PORT = process.env.PORT;

middlewares(app);
app.use(apiRouter);
app.use(errorController);

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log('Error starting server');
  }
}

startServer();
