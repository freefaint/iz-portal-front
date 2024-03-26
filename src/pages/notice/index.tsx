import { useContext, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActions, CardContent, Collapse, Pagination, Typography } from '@mui/material';
import { noticeHttpClient as httpClient } from 'api';
import { RegistryDataContext, RegistryProvider, Service } from 'avrora';
import CounterLikes from 'components/atoms/counter/counterLikes';
import { ExpandMore } from 'components/atoms/expand-more';
import { Notices, NeutralLink, FullNews } from 'components/atoms/neutral-link';
import { FullCard, FullWidthCard, WrapBox } from 'components/atoms/styled';
import { NoticeDto } from 'rest';

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
        {!id && <NoticeList />}

        {id && <NoticePage />}
        {!id && <Pagination />}
      </RegistryProvider>
    </>
  );
}

const NoticeList = () => {
  const { data } = useContext(RegistryDataContext);

  return (
    <>
      <Typography variant="h4">Уведомления</Typography>

      <WrapBox>{data?.map((i) => <NoticeItem key={i.id} {...i} />)}</WrapBox>
    </>
  );
};

const NoticeItem = ({ id, title, date, text, isLikedByMe, likesCount }: NoticeDto) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(isLikedByMe ?? false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLiked = () => {
    setLike(!like);
  };

  return (
    <>
      <Notices isLike={like}>
        <FullWidthCard>
          <NeutralLink to={`/notice/${id}`}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(date).toLocaleString()}
              </Typography>
            </CardContent>
          </NeutralLink>
          <CardActions disableSpacing>
            {likesCount && <CounterLikes count={likesCount} handleLiked={handleLiked} isLike={like} />}
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded}>
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{text}</Typography>
            </CardContent>
          </Collapse>
        </FullWidthCard>
      </Notices>
    </>
  );
};

const NoticePage = () => {
  const { item } = useContext(RegistryDataContext);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLiked = () => {
    setLike(!like);
  };

  return (
    item && (
      <>
        <FullNews>
          <FullCard>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(item.date).toLocaleString()}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {item.likesCount && <CounterLikes count={item.likesCount} handleLiked={handleLiked} isLike={like} />}
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded}>
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{item.text}</Typography>
              </CardContent>
            </Collapse>
          </FullCard>
        </FullNews>
      </>
    )
  );
};
