import StatusError from '../misc/statusError';
import { ListOptions } from 'misc/types/queryTypes';
import * as Repository from './companies.repository';
import { CreateCompanyPayload, UpdateCompanyPayload } from './companies.types';

export const get = async (id: string) => {
  const company = await Repository.getCompany(id);

  if (!company) {
    throw new StatusError(404, 'COMPANY_NOT_FOUND');
  }
  
  return company;
};

export const list = async (options: ListOptions) => {
  const { items, count } = await Repository.getCompanies(options);
  
  return { items, count };
};

export const create = async (data: CreateCompanyPayload) => {
  const company = await Repository.createCompany(data);
  
  return company;
};

export const update = async (id: string, data: UpdateCompanyPayload) => {
  const company = await Repository.updateCompany(id, data);
  
  return company;
};

export const remove = async (id: string) => {
  const company = await Repository.removeCompany(id);

  if (!company) {
    throw new StatusError(404, 'COMPANY_NOT_FOUND');
  }
  
  return company;
};
