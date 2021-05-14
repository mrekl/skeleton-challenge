import { Router } from 'express';
import * as Controller from './auth.controller';

export default () => {
  const router = Router();

  router.post('/auth/login', Controller.login);
	router.post('/auth/register', Controller.register);
  router.post('/auth/reset', Controller.resetPasswordRequest);
  router.patch('/auth/reset', Controller.resetPassword);

	return router;
}
