import express from 'express';
import allShiftsController from '../../controllers/home/all.shifts.controller';
import ownShiftsController from '../../controllers/home/own.shifts.controller';

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  if (!req.cookies.token) res.redirect('/login');
  res.render('home', { hideNavbar: false });
});

homeRouter.get('/shifts', allShiftsController);

homeRouter.get('/shifts/own', ownShiftsController);

homeRouter.get('/login', (req, res) => {
  if (req.cookies.token) res.redirect('/');
  res.render('login', { hideNavbar: true });
});

homeRouter.get('/register', (req, res) => {
  if (req.cookies.token) res.redirect('/');
  res.render('register', { hideNavbar: true });
});

homeRouter.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

export default homeRouter;
