import express from 'express';
import allShiftsController from '../../controllers/home/all.shifts.controller';
import ownShiftsController from '../../controllers/home/own.shifts.controller';
import homeController from '../../controllers/home/home.controller';

const homeRouter = express.Router();

homeRouter.get('/', homeController);

homeRouter.get('/shifts', allShiftsController);

homeRouter.get('/shifts/own', ownShiftsController);

homeRouter.get('/login', (req, res) => {
  if (req.cookies.token) return res.redirect('/');
  res.render('login', { hideNavbar: true });
});

homeRouter.get('/register', (req, res) => {
  if (req.cookies.token) return res.redirect('/');
  res.render('register', { hideNavbar: true });
});

homeRouter.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

export default homeRouter;
