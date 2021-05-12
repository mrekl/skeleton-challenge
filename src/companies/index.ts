import { Router } from 'express';
import * as Controller from './companies.controller';

export default () => {
  const router = Router();

  router.get('/companies/:id', Controller.get);
	router.get('/companies', Controller.list);
	router.post('/companies', Controller.create);
	router.patch('/companies/:id', Controller.update);
	router.delete('/companies/:id', Controller.remove);

	return router;
}
