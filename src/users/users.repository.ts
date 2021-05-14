import { CreateUserPayload, UpdateUserPayload, User } from './users.types';
import { v4 as uuidv4 } from 'uuid';
import { hashSync } from 'bcryptjs';
import { db } from '../db';

const TABLE_NAME = 'users';
const SALT_ROUNDS = 10;

export const getUserById = async (id: string): Promise<User> => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  const result = await db().get(params).promise();

  return result.Item as User;
};

export const getUserByEmail = async (email: string): Promise<User> => {
  const params = {
    TableName: TABLE_NAME,
    FilterExpression: "email = :email",
    ExpressionAttributeValues: {
      ":email": email,
    },
  };

  const result = await db().scan(params).promise();

  return result.Items[0] as User;
};

export const createUser = async (data: CreateUserPayload): Promise<User> => {
  const user = {
    id: uuidv4(),
    email: data.email.toLowerCase().trim(),
    password: hashSync(data.password, SALT_ROUNDS),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const params = {
    TableName: TABLE_NAME,
    Item: user,
  };

  await db().put(params).promise();

  return user as User;
};

export const updateUser = async (id: string, data: UpdateUserPayload): Promise<User> => {
  const user = {
    id,
    ...data,
    updatedAt: new Date(),
  };

  if (data.password) {
    user.password = hashSync(data.password, SALT_ROUNDS);
  }

  const params = {
    TableName: TABLE_NAME,
    Item: user,
  };

  const result = await db().put(params).promise();
  const updated = await getUserByEmail(data.email!);

  return updated as User;
};
