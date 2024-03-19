import { NewsDto } from 'rest';

import { factory, mock } from './';

export const genNews = (id: string): NewsDto => {
  return {
    id,
    announce: 'Вышел новый подкаст',
    createDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
    createUserId: '',
    updateUserId: '',
    newsSectionId: '',
    title: 'Новость',
    viewsCount: 56,
    likesCount: 33,
    date: new Date().toISOString(),
    img: 'https://o-kemerovo.ru/wp-content/uploads/2024/01/uzhe-dostupna.-youtube-zapustil-poleznuyu-funktsiyu-po-vsemu-miru-akket-akket.com-2.jpg',
    text: `Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях, так как позволяют изданию выделиться из информационного шума. Цели исследования – выявить распространенность лонгридов в российских СМИ и содержательные и композиционные особенности этих текстов. Исследование включает мониторинг публикаций в центральных российских изданиях и последующий контент-анализ 10 материалов из 10 печатных и онлайновых изданий. Выводы исследования: лонгриды присутствуют в изданиях разных типов: от ежедневных газет − до нишевых новостных сайтов. Они посвящены, как правило, описанию нового явления; имеют объем от 2 до 4 тыс. слов и построены по композиционной схеме чередования примеров и обобщений.`,
  };
};

mock.onPost(/\/api\/v1\/news/).reply(() => {
  return [
    200,
    {
      total: 2,

      items: factory(genNews),
    },
  ];
});
