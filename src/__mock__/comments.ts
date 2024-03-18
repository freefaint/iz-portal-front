import { mock } from '__mock__';
import { CommentsListDto } from 'rest';

export const genComments = (): CommentsListDto => {
  return {
    total: 1,
    items: [
      {
        id: '1',
        text: 'commet',
        date: new Date().toISOString(),
        author: 'Терещенко',
      },
    ],
  };
};

// mock.onGet(/\/api\/v1\/news\/?.*\/comments/).reply(() => {
//   // const id = resp.url?.match(/\/api\/v1\/news\/?.*\/comments/)?.[1] ?? '0';
//   return [200, genComments()];
// });
mock.onPost(/\/api\/v1\/news\/?.*\/comments/).reply(() => {
  return [200, genComments()];
});

// /api/v1/news/{id}/comments
// id,
// text: 'мой комментарий',
// date: new Date().toISOString(),
// author: 'Терещенко Андрей Дмитриевич'
