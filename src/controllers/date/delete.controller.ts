import { Request, Response, NextFunction } from 'express';
import deleteService from '../../services/date/delete.service';

const main = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const { idDate } = req.body;
        await deleteService(idDate);
        res.status(200).send('Horario eliminado correctamente');
    } catch (error) {
        next(error);
    }
}

export default main