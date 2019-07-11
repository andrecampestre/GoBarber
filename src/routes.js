import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
<<<<<<< HEAD

import authMiddleware from './app/middlewares/auth';
=======
>>>>>>> 31f439a355e03cfad945dfd5ec1af6e84f1e2dcf

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
<<<<<<< HEAD

routes.use(authMiddleware);

routes.put('/users', UserController.update);
=======
>>>>>>> 31f439a355e03cfad945dfd5ec1af6e84f1e2dcf

export default routes;
