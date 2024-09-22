import express from 'express';
import allShiftsController from '../../controllers/home/all.shifts.controller';
import ownShiftsController from '../../controllers/home/own.shifts.controller';

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  if (!req.cookies.token) res.redirect('/login');
  res.render('home');
});

homeRouter.get('/shifts', allShiftsController);

homeRouter.get('/shifts/own', ownShiftsController);

homeRouter.get('/login', (req, res) => {
  if (req.cookies.token) res.redirect('/');
  res.render('login');
});

homeRouter.get('/register', (req, res) => {
  if (req.cookies.token) res.redirect('/');
  res.render('register');
});

export default homeRouter;
