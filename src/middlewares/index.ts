import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const main = (app: any) => {
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.set('view engine', 'ejs');
  app.set('views', './src/views');
};

export default main;
