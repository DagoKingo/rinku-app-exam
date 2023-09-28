import { Router, Request, Response } from 'express';
import TrabajadorController from "../controllers/trabajador.controller";

const router = Router();
const controller = new TrabajadorController();

router.get('/', async(req: Request, res: Response) => {
    const result = await controller.get();
    res.status(200).json(result);
});

router.post('/', async(req: Request, res: Response) => {
    const { nombre, numero, id_tipo } = req.body;
    
    const result = await controller.store(nombre, numero, id_tipo);
    res.status(200).json(result);
});

router.get('/roles', async(req: Request, res: Response) => {
    const result = await controller.getRoles();
    res.status(200).json(result);
});


export { router as TrabajadorRouter };