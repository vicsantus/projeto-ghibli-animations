import { Router } from 'express';
// import validateJWT from '../auth/validateJWT';
import FilmsController from '../controllers/Films.controller';

const router = Router();

const filmsController = new FilmsController();

router.get('/', filmsController.getAll);

export default router;