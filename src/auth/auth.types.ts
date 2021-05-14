export type TokenPayload = {
  iat: number,
  exp?: number,
  user: {
    id: string;
    email: string;
  },
}
