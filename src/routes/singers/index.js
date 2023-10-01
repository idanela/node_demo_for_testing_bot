import {Router} from 'express';
import { getAllSingers} from './singersHandlers.js';

const singersRouter = Router();

singersRouter.post('/',getAllSingers);
export default singersRouter