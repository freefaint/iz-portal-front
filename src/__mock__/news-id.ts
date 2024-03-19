import { mock } from './';
import { genNews } from './news';

mock.onGet(/\/api\/v1\/news\/?.*/).reply((resp) => {
  return [200, genNews(resp.url?.split('/').pop() ?? '0')];
});
