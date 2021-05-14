import StatusError from '../misc/statusError';
import * as Repository from './users.repository';
import { CreateUserPayload, UpdateUserPayload } from './users.types';

export const getById = async (id: string) => {
  const user = await Repository.getUserById(id);

  if (!user) {
    throw new StatusError(404, 'USER_NOT_FOUND');
  }
  
  return user;
};

export const getByEmail = async (email: string) => {
  const user = await Repository.getUserByEmail(email);
  
  if (!user) {
    throw new StatusError(404, 'USER_NOT_FOUND');
  }

  return user;
};

export const create = async (data: CreateUserPayload) => {
  const found = await Repository.getUserByEmail(data.email);

  if (found) {
    throw new StatusError(409, 'EMAIL_TAKEN');
  }

  const user = await Repository.createUser(data);
  
  return user;
};

export const update = async (id: string, data: UpdateUserPayload) => {
  const user = await Repository.updateUser(id, data);
  
  return user;
};
