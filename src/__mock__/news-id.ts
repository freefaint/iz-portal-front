import { mock } from './';
import { genNews } from './news';

mock.onGet(/\/api\/v1\/news\/:id/).reply((resp) => {
  return [200, genNews(resp.params.id)];
});
