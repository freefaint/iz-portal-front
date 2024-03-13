import { useContext, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Link, Pagination, Typography } from '@mui/material';
import { newsHttpClient as httpClient } from 'api';
import { RegistryDataContext, RegistryProvider, Service } from 'avrora';
import { TinyImg } from 'components/atoms/icons';
import { FlexNews, NeutralLink } from 'components/atoms/neutral-link';
import { NewsDto } from 'rest';

import * as Styled from './styled';

export function Main() {
  const { id } = useParams();

  const navigate = useNavigate();

  const service: Service<NewsDto> = useMemo(() => {
    return {
      getItem: ({ id }: { id: string | number }) => httpClient.getNewsById(id.toString()).then(({ data }) => data),

      getList: ({ pagination, order, ...rest }) => {
        return httpClient
          .searchNews({
            ...rest,
            skip: pagination.skip,
            limit: pagination.top,
            order: order.map((i) => ({ type: i.field, desc: i.sort === 'desc' })),
          })
          .then((resp) => ({ count: resp.data.total, data: resp.data.items }));
      },

      postItem: ({ item }) => httpClient.addNews(item).then(({ data }) => data),
      patchItem: ({ id, item }) => httpClient.updateNews(id.toString(), item).then(({ data }) => data),
      removeItem: ({ id }) => httpClient.removeNews(id.toString()).then(({ data }) => data),
      putItem: ({ id, item }) => httpClient.updateNews(id.toString(), item).then(({ data }) => data),
    };
  }, []);

  return (
    <>
      <RegistryProvider onOpenItem={(id) => navigate(`/news/${id!}`)} id={id} service={service} action={id && 'item'}>
        {!id && <NewsList />}

        <Pagination />

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

      <Styled.GapMarginBox>{data?.map((i) => <NewsItem key={i.id} {...i} />)}</Styled.GapMarginBox>
    </>
  );
};

const NewsItem = ({ id, title, img, date, text }: NewsDto) => {
  return (
    <>
      <FlexNews>
        <NeutralLink to={`/news/${id}`}>
          <Link>
            <Typography variant="h6">{title}</Typography>
          </Link>
        </NeutralLink>

        <TinyImg src={img} alt="news" />
      </FlexNews>

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
        <FlexNews>
          <Typography variant="h4">{item.title}</Typography>
          <TinyImg src={item.img} alt="news" />
        </FlexNews>

        <Styled.MarginBox>{item.text}</Styled.MarginBox>

        {new Date(item.date).toLocaleString()}
      </>
    )
  );
};
