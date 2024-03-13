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

mock.onPost(/\/api\/v1\/news/).reply(200, {
  total: 2,

  items: [
    {
      id: 1,
      title: 'Вышел новый подкаст',
      date: new Date(),
      isLike: true,
      img: 'https://www.calltouch.ru/blog/wp-content/uploads/2023/03/image5-18-1024x576.png',
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 2,
      title: 'Добавлена новая новость',
      date: new Date(),
      isLike: true,
      img: 'https://img.freepik.com/free-photo/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1710201600&semt=ais',
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 3,
      title: 'Произошло нечто интересное',
      date: new Date(),
      isLike: false,
      img: 'https://img.freepik.com/free-photo/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1710201600&semt=ais',
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 4,
      title: 'Новость Новость Новость',
      date: new Date(),
      isLike: false,
      img: 'https://img.freepik.com/free-photo/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1710201600&semt=ais',
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 5,
      title: 'Новость Новость Новость',
      date: new Date(),
      isLike: true,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/800px-YouTube_social_white_square_%282017%29.svg.png',
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 6,
      title: 'Новость Новость Новость',
      date: new Date(),
      isLike: true,
      img: 'https://img.freepik.com/free-photo/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1710201600&semt=ais',
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 7,
      title: 'Новость Новость Новость',
      date: new Date(),
      isLike: true,
      img: 'https://img.freepik.com/free-photo/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1710201600&semt=ais',
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
    {
      id: 8,
      title: 'Новость Новость Новость',
      date: new Date(),
      isLike: false,
      img: 'https://img.freepik.com/free-photo/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1710201600&semt=ais',
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
  ],
});

mock.onGet(/\/api\/v1\/news\/:id/).reply(200, {
  items: [
    {
      id: 1,
      title: 'Вышел новый подкаст',
      date: new Date(),
      isLike: true,
      text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях',
    },
  ],
});
