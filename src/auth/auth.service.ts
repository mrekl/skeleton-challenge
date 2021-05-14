import { compareSync } from 'bcryptjs';
import { verify, sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { TokenPayload } from './auth.types';
import { Service as UserService, User, CreateUserPayload } from '../users';
import StatusError from '../misc/statusError';

dotenv.config();

export const getToken = (user: User) => {
  return sign(createTokenPayload(user), String(process.env.JWT_TOKEN));
};

export const createTokenPayload = (user_: User) => {
  const payload: TokenPayload = {
    iat: Date.now(),
    user: {
      id: user_.id,
      email: user_.email,
    },
  };

  return payload;
};

export const loginAndGetToken = async (email_: string, password: string) => {
  const email = email_.toLocaleLowerCase().trim();
  const user = await UserService.getByEmail(email);

  if (!user) {
    throw new StatusError(401, 'UNAUTHORIZED');
  }

  const isPasswordValid = compareSync(password, user.password);

  if (!isPasswordValid) {
    throw new StatusError(401, 'UNAUTHORIZED');
  }

  return {
    token: getToken(user),
    user: user,
  };
};

export const register = async (data: CreateUserPayload) => {
  const formattedEmail = data.email.toLowerCase().trim();

  return UserService.create({ ...data, email: formattedEmail });
};

export const resetPasswordRequest = async (email_: string) => {
  const email = email_.toLowerCase().trim();
  const user = await UserService.getByEmail(email);
  const resetPasswordToken = uuidv4();
  await UserService.update(user.id, { resetPasswordToken, email, password: user.password });

  return resetPasswordToken;
};

export const resetPassword = async (email_: string, token: string, password: string) => {
  const email = email_.toLowerCase().trim();

  const user = await UserService.getByEmail(email);

  if (token !== user.resetPasswordToken) {
    throw new StatusError(401, 'INVALID_TOKEN');
  }

  return UserService.update(user.id, { password, email });
};
