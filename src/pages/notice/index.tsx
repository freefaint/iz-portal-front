import { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  IconButtonProps,
  Pagination,
  Typography,
  Link,
  styled,
} from '@mui/material';
import { RegistryDataContext, RegistryProvider, Service } from 'avrora';
import { Notices, NeutralLink, FlexNews } from 'components/atoms/neutral-link';
import { NoticeApiFactory, NoticeDto } from 'rest';

const httpClient = NoticeApiFactory();

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

        {id && <NoticePage ids={id} />}
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

      <Box style={{ gap: '1rem', margin: '1rem 0', display: 'flex', flexWrap: 'wrap' }}>
        {data?.map((i) => <NoticeItem key={i.id} {...i} />)}
      </Box>
    </>
  );
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const NoticeItem = ({ id, title, date, text, isLikedByMe }: NoticeDto) => {
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
        <Card sx={{ minWidth: '100%' }}>
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
            <IconButton aria-label="add to favorites" onClick={handleLiked}>
              <FavoriteIcon className="icon-like" />
            </IconButton>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded}>
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{text}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Notices>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NoticePage = (ids: any) => {
  const { data } = useContext(RegistryDataContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [item, setItem] = useState<any>(null);
  useEffect(() => {
    if (!data) {
      return;
    }
    setItem(data.filter((i) => i.id.toString() === ids.ids)[0]);
  }, [data, ids.ids]);
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
        <FlexNews isLike={item.like} style={{ width: '100%' }}>
          <Card sx={{ minWidth: '100%', minHeight: '100%' }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(item.date).toLocaleString()}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={handleLiked}>
                <FavoriteIcon className="icon-like" />
              </IconButton>
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded}>
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{item.text}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </FlexNews>
      </>
    )
  );
};
