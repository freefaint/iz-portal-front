import { AuthApiAxiosParamCreator, NewsApiFactory } from 'rest';

export const newsHttpClient = NewsApiFactory();
export const userHttpClient = AuthApiAxiosParamCreator();
