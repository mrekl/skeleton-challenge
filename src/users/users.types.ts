export type User = {
  id: string;
  email: string;
  password: string;
  resetPasswordToken?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CreateUserPayload = {
  email: string;
  password: string;
}

export type UpdateUserPayload = {
  email?: string;
  password?: string;
  resetPasswordToken?: string;
}
