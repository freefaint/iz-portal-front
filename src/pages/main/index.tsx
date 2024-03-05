import { useContext, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Link, Typography } from '@mui/material';
import { RegistryDataContext, RegistryProvider } from 'avrora';
import { NeutralLink } from 'components/atoms/neutral-link';

const genNew = (id: string) => {
  return {
    id,
    title: 'Новость',
    date: new Date(),
    text: `Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все более популярными в печатных и онлайновых изданиях, так как позволяют изданию выделиться из информационного шума. Цели исследования – выявить распространенность лонгридов в российских СМИ и содержательные и композиционные особенности этих текстов. Исследование включает мониторинг публикаций в центральных российских изданиях и последующий контент-анализ 10 материалов из 10 печатных и онлайновых изданий. Выводы исследования: лонгриды присутствуют в изданиях разных типов: от ежедневных газет − до нишевых новостных сайтов. Они посвящены, как правило, описанию нового явления; имеют объем от 2 до 4 тыс. слов и построены по композиционной схеме чередования примеров и обобщений.`,
  };
};

export function Main() {
  const { id } = useParams();

  const navigate = useNavigate();

  const service = useMemo(
    () => ({
      getItem: ({ id }: { id: string | number }) => Promise.resolve(genNew(id.toString())),

      getList: () => {
        const data = new Array(10).fill(true).map((i, j) => genNew(j.toString()));

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
    [],
  );

  return (
    <>
      <RegistryProvider onOpenItem={(id) => navigate(`/news/${id!}`)} id={id} service={service} action={id && 'item'}>
        {!id && <NewsList />}

        {id && <NewsPage />}
      </RegistryProvider>
    </>
  );
}

const NewsList = () => {
  const { data } = useContext(RegistryDataContext);

  return (
    <>
      <Typography variant="h4">Новости</Typography>

      <Box style={{ gap: '1rem', margin: '1rem 0', display: 'flex', flexDirection: 'column' }}>
        {data?.map((i) => <NewsItem key={i.id} {...i} />)}
      </Box>
    </>
  );
};

const NewsItem = ({ id, title, date, text }: ReturnType<typeof genNew>) => {
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

const NewsPage = () => {
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
