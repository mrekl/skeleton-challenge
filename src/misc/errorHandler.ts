import { Request, Response, NextFunction } from 'express';
import StatusError from './statusError';

export const errorHandler = (
  err: StatusError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(`[\x1b[31mERROR\x1b[0m] ${err.stack}`);

  return res.status(err.status || 500).json({
    code: err.status || 500,
    message: err instanceof StatusError ? err.message : 'INTERNAL_ERROR',
  });
};
