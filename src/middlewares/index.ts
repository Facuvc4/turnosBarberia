import express from 'express';

const main = (app: any) => {
  app.use(express.json());
};

export default main;
