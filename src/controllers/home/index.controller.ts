import { Request, Response, NextFunction } from 'express';

const main = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) res.redirect('/login');
    res.render('home');
}

export default main;