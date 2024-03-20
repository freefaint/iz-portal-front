import { AuthApiAxiosParamCreator, NewsApiFactory, NoticeApiFactory } from 'rest';

export const newsHttpClient = NewsApiFactory();
export const userHttpClient = AuthApiAxiosParamCreator();
export const noticeHttpClient = NoticeApiFactory();
