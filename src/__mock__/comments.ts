import { mock } from '__mock__';
import { CommentsListDto } from 'rest';

export const genComments = (): CommentsListDto => {
  return {
    total: 1,
    items: [
      {
        id: '1',
        text: 'я думаfю это хороший комментарий',
        date: new Date().toISOString(),
        author: 'Терещенко А.Д',
      },
      {
        id: '2',
        text: 'поддерживаю',
        date: new Date().toISOString(),
        author: 'Попов А.Д',
        parentId: '1',
      },
      {
        id: '3',
        text: 'согласен',
        date: new Date().toISOString(),
        author: 'Дмитриев К.Д',
        parentId: '1',
      },
      {
        id: '4',
        text: 'интересный пост',
        date: new Date().toISOString(),
        author: 'Минин А.Д',
      },
      {
        id: '5',
        text: 'да-да',
        date: new Date().toISOString(),
        author: 'Турский А.Д',
        parentId: '4',
      },
    ],
  };
};

// mock.onGet(/\/api\/v1\/news\/?.*/).reply((resp) => {
//   return [200, genComments()];
// });

mock.onPost(/\/api\/v1\/comments/).reply(() => {
  return [200, genComments()];
});
