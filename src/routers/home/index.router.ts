import express from 'express';
import homeController from '../../controllers/home/index.controller';

const homeRouter = express.Router();

homeRouter.get('/', homeController);

homeRouter.get('/login', (req, res) => {
    if (req.cookies.token) res.redirect('/');
    res.render('login');
});

homeRouter.get('/register', (req, res) => {
    if (req.cookies.token) res.redirect('/');
    res.render('register');
});

export default homeRouter;
