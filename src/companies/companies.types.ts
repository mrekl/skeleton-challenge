export type Company = {
  id: string;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CreateCompanyPayload = {
  name: string;
  address: string;
}

export type UpdateCompanyPayload = {
  name?: string;
  address?: string;
}
