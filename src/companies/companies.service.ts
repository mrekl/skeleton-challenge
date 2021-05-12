import { ListOptions } from 'misc/types/queryTypes';
import * as Repository from './companies.repository';
import { CreateCompanyPayload } from './companies.types';

export const get = async (id: string) => {
  const company = await Repository.getCompany(id);
  
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

export const update = async (id: string, data: CreateCompanyPayload) => {
  const company = await Repository.updateCompany(id, data);
  
  return company;
};

export const remove = async (id: string) => {
  const company = await Repository.removeCompany(id);
  
  return company;
};
