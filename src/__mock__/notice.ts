import { mock } from './';

export const genNew = (id: string) => {
  return {
    id,
    short: 'lol',
    createDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
    createUserId: '',
    updateUserId: '',
    title: 'Новость',
    date: new Date(),
    img: 'https://icons.iconarchive.com/icons/iconsmind/outline/512/Newspaper-icon.png',
    text: `Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях, так как позволяют изданию выделиться из информационного шума. Цели исследования – выявить распространенность лонгридов в российских СМИ и содержательные и композиционные особенности этих текстов. Исследование включает мониторинг публикаций в центральных российских изданиях и последующий контент-анализ 10 материалов из 10 печатных и онлайновых изданий. Выводы исследования: лонгриды присутствуют в изданиях разных типов: от ежедневных газет − до нишевых новостных сайтов. Они посвящены, как правило, описанию нового явления; имеют объем от 2 до 4 тыс. слов и построены по композиционной схеме чередования примеров и обобщений.`,
  };
};

mock.onPost(/\/api\/v1\/notice/).reply(200, {
  total: 2,

  items: [
    {
      id: 1,
      title: 'Вышел новый подкаст',
      date: new Date(),
      isLike: true,
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 2,
      title: 'Добавлена новая новость',
      date: new Date(),
      isLike: true,
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 3,
      title: 'Произошло нечто интересное',
      date: new Date(),
      isLike: false,
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 4,
      title: 'Новость Новость Новость',
      date: new Date(),
      isLike: false,
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 5,
      title: 'Новость Новость Новость',
      date: new Date(),
      isLike: true,
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 6,
      title: 'Новость Новость Новость',
      date: new Date(),
      isLike: true,
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 7,
      title: 'Новость Новость Новость',
      date: new Date(),
      isLike: true,
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 8,
      title: 'Новость Новость Новость',
      date: new Date(),
      isLike: false,
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
  ],
});
