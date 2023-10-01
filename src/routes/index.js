import  { Router } from "express";
import singersRouter from "./singers/index.js";
const baseRouter = Router();

baseRouter.use('/singers',singersRouter);


export default baseRouter