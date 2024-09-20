import express from 'express';
import cookieParser from 'cookie-parser';

const main = (app: any) => {
  app.use(express.json());
  app.use(cookieParser());
  app.set('view engine', 'ejs');
  app.set('views', './src/views');
};

export default main;
