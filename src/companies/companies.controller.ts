import { Request, Response, NextFunction } from 'express';
import { ListOptions } from 'misc/types/queryTypes';
import * as Service from './companies.service';

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const result = await Service.get(id);

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { limit, offset } = req.query;

    const options: ListOptions = {
      limit: Number(limit),
      offset: Number(offset),
    };

    const result = await Service.list(options);

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, address } = req.body;

    const result = await Service.create({ name, address });

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;

    const result = await Service.update(id, { name, address });

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const result = await Service.remove(id);

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};
