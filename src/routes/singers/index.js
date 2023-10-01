import {Router} from 'express';
import { getAllSingers} from './singersHandlers.js';

const singersRouter = Router();

singersRouter.get('/',getAllSingers);
export default singersRouter