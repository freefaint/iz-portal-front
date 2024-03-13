import { useContext, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Link, Typography } from '@mui/material';
import { noticeHttpClient as httpClient } from 'api';
import { RegistryDataContext, RegistryProvider, Service } from 'avrora';
import { NeutralLink } from 'components/atoms/neutral-link';
import { NoticeDto } from 'rest';

import * as Styled from './styled';

export function Notice() {
  const { id } = useParams();

  const navigate = useNavigate();

  const service: Service<NoticeDto> = useMemo(() => {
    return {
      getItem: ({ id }: { id: string | number }) => httpClient.getNoticeById(id.toString()).then(({ data }) => data),

      getList: ({ pagination, order, ...rest }) => {
        return httpClient
          .searchNotices({
            ...rest,
            skip: pagination.skip,
            limit: pagination.top,
            order: order.map((i) => ({ type: i.field, desc: i.sort === 'desc' })),
          })
          .then((resp) => ({ count: resp.data.total, data: resp.data.items }));
      },

      postItem: ({ item }) => httpClient.addNotice(item).then(({ data }) => data),
      patchItem: ({ id, item }) => httpClient.updateNotice(id.toString(), item).then(({ data }) => data),
      removeItem: ({ id }) => httpClient.removeNotice(id.toString()).then(({ data }) => data),
      putItem: ({ id, item }) => httpClient.updateNotice(id.toString(), item).then(({ data }) => data),
    };
  }, []);

  return (
    <>
      <RegistryProvider
        onOpenItem={(id) => navigate(`/notices/${id!}`)}
        id={id}
        service={service}
        action={id && 'item'}
      >
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

      <Styled.GapMarginBox>{data?.map((i) => <NoticeItem key={i.id} {...i} />)}</Styled.GapMarginBox>
    </>
  );
};

const NoticeItem = ({ id, title, date, text }: NoticeDto) => {
  return (
    <>
      <NeutralLink to={`/news/${id}`}>
        <Link>
          <Typography variant="h6">{title}</Typography>
        </Link>
      </NeutralLink>

      <Box>{text}</Box>

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

        <Styled.MarginBox>{item.text}</Styled.MarginBox>

        {new Date(item.date).toLocaleString()}
      </>
    )
  );
};
