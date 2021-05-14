import { ListOptions } from 'misc/types/queryTypes';
import { CreateCompanyPayload, Company, UpdateCompanyPayload } from './companies.types';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../db';

const TABLE_NAME = 'companies';

export const getCompany = async (id: string): Promise<Company> => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  const result = await db().get(params).promise();

  return result.Item as Company;
};

export const getCompanies = async (options: ListOptions): Promise<{ items: Company[]; count: number }> => {
  const params = {
    TableName: TABLE_NAME,
  };

  const result = await db().scan(params).promise();

  return { items: result.Items , count: result.Count };
};

export const createCompany = async (data: CreateCompanyPayload): Promise<Company> => {
  const company = {
    id: uuidv4(),
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const params = {
    TableName: TABLE_NAME,
    Item: company,
  };

  await db().put(params).promise();

  return company as Company;
};

export const updateCompany = async (id: string, data: UpdateCompanyPayload): Promise<Company> => {
  const company = {
    id,
    ...data,
    updatedAt: new Date(),
  };

  const params = {
    TableName: TABLE_NAME,
    Item: company,
  };

  await db().put(params).promise();
  const updated = await getCompany(id);

  return updated as Company;
};

export const removeCompany = async (id: string): Promise<Company> => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  await db().delete(params).promise();

  return {} as Company;
};
