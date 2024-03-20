import { mock } from './';
import { genNotice } from './notice';

mock.onGet(/\/api\/v1\/notice\/?.*/).reply((resp) => {
  return [200, genNotice(resp.url?.split('/').pop() ?? '0')];
});
