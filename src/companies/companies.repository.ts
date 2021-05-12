import { ListOptions } from 'misc/types/queryTypes';
import { CreateCompanyPayload, Company } from './companies.types';

export const getCompany = async (id: string): Promise<Company> => {

  return {} as Company;
};

export const getCompanies = async (options: ListOptions): Promise<{ items: Company[]; count: number }> => {

  return { items: [] as Company[], count: 0 };
};

export const createCompany = async (data: CreateCompanyPayload): Promise<Company> => {

  return {} as Company;
};

export const updateCompany = async (id: string, data: CreateCompanyPayload): Promise<Company> => {

  return {} as Company;
};

export const removeCompany = async (id: string): Promise<Company> => {

  return {} as Company;
};
