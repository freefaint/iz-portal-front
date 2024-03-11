import { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

import { Box, Link, Typography } from '@mui/material';
import { RegistryDataContext, RegistryProvider } from 'avrora';
import MockAdapter from 'axios-mock-adapter';
import { NeutralLink } from 'components/atoms/neutral-link';

const genNew = (id: string) => {
  return {
    id,
    title: 'Уведомление',
    date: new Date(),
    text: `Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях, так как позволяют изданию выделиться из информационного шума. Цели исследования – выявить распространенность лонгридов в российских СМИ и содержательные и композиционные особенности этих текстов. Исследование включает мониторинг публикаций в центральных российских изданиях и последующий контент-анализ 10 материалов из 10 печатных и онлайновых изданий. Выводы исследования: лонгриды присутствуют в изданиях разных типов: от ежедневных газет − до нишевых новостных сайтов. Они посвящены, как правило, описанию нового явления; имеют объем от 2 до 4 тыс. слов и построены по композиционной схеме чередования примеров и обобщений.`,
  };
};

export function Notice() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const mock = new MockAdapter(axios);
    mock.onGet('/news').reply(200, {
      news: [
        {
          title: 'Уведомление',
          date: new Date(),
          img: 'https://icons.iconarchive.com/icons/iconsmind/outline/512/Newspaper-icon.png',
          text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях, так как позволяют изданию выделиться из информационного шума. Цели исследования – выявить распространенность лонгридов в российских СМИ и содержательные и композиционные особенности этих текстов. Исследование включает мониторинг публикаций в центральных российских изданиях и последующий контент-анализ 10 материалов из 10 печатных и онлайновых изданий. Выводы исследования: лонгриды присутствуют в изданиях разных типов: от ежедневных газет − до нишевых новостных сайтов. Они посвящены, как правило, описанию нового явления; имеют объем от 2 до 4 тыс. слов и построены по композиционной схеме чередования примеров и обобщений.',
        },
        {
          title: 'Уведомление',
          date: new Date(),
          img: 'https://icons.iconarchive.com/icons/iconsmind/outline/512/Newspaper-icon.png',
          text: 'Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях, так как позволяют изданию выделиться из информационного шума. Цели исследования – выявить распространенность лонгридов в российских СМИ и содержательные и композиционные особенности этих текстов. Исследование включает мониторинг публикаций в центральных российских изданиях и последующий контент-анализ 10 материалов из 10 печатных и онлайновых изданий. Выводы исследования: лонгриды присутствуют в изданиях разных типов: от ежедневных газет − до нишевых новостных сайтов. Они посвящены, как правило, описанию нового явления; имеют объем от 2 до 4 тыс. слов и построены по композиционной схеме чередования примеров и обобщений.',
        },
      ],
    });

    axios
      .get('/news')
      .then((response) => {
        setNotice(response.data.news);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  const service = useMemo(
    () => ({
      getItem: ({ id }: { id: string | number }) => Promise.resolve(genNew(id.toString())),

      getList: () => {
        const data = notice;

        return Promise.resolve({
          data,
          count: data.length,
        });
      },

      postItem: (props: { item: ReturnType<typeof genNew> }) => Promise.resolve(props.item),
      patchItem: (props: { item: ReturnType<typeof genNew> }) => Promise.resolve(props.item),
      removeItem: () => Promise.resolve(void 0),
      putItem: (props: { item: ReturnType<typeof genNew> }) => Promise.resolve(props.item),
    }),
    [notice],
  );

  return (
    <>
      <RegistryProvider onOpenItem={(id) => navigate(`/news/${id!}`)} id={id} service={service} action={id && 'item'}>
        {!id && <NewsList />}

        {id && <NoticePage />}
      </RegistryProvider>
    </>
  );
}

const NewsList = () => {
  const { data } = useContext(RegistryDataContext);

  return (
    <>
      <Typography variant="h4">Уведомления</Typography>

      <Box style={{ gap: '1rem', margin: '1rem 0', display: 'flex', flexDirection: 'column' }}>
        {data?.map((i) => <NoticeItem key={i.id} {...i} />)}
      </Box>
    </>
  );
};

const NoticeItem = ({ id, title, date, text }: ReturnType<typeof genNew>) => {
  return (
    <>
      <NeutralLink to={`/news/${id}`}>
        <Link>
          <Typography variant="h6">{title}</Typography>
        </Link>
      </NeutralLink>

      <Box style={{ margin: '0rem 0' }}>{text}</Box>

      {new Date(date).toLocaleString()}
    </>
  );
};

const NoticePage = () => {
  const { item } = useContext(RegistryDataContext);

  return (
    item && (
      <>
        <Typography variant="h4">{item.title}</Typography>

        <Box style={{ margin: '1rem 0' }}>{item.text}</Box>

        {new Date(item.date).toLocaleString()}
      </>
    )
  );
};
