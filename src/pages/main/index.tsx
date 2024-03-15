import { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Pagination,
  Typography,
  styled,
} from '@mui/material';
import { newsHttpClient as httpClient } from 'api';
import { RegistryDataContext, RegistryProvider, Service } from 'avrora';
import { FlexNews, NeutralLink } from 'components/atoms/neutral-link';
import { NewsDto } from 'rest';

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
        {id && <NewsPage ids={id} />}
        {!id && <Pagination />}
      </RegistryProvider>
    </>
  );
}

const NewsList = () => {
  const { data } = useContext(RegistryDataContext);

  return (
    <>
      <Typography variant="h4">Новости</Typography>

      <Box style={{ gap: '1rem', margin: '1rem 0', display: 'flex', flexWrap: 'wrap' }}>
        {data?.map((i) => <NewsItem key={i.id} {...i} />)}
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

const NewsItem = ({ id, title, img, date, text, isLike }: NewsDto) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(isLike);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLiked = () => {
    setLike(!like);
  };

  return (
    <>
      <FlexNews isLike={like}>
        <Card sx={{ minWidth: '100%' }}>
          <NeutralLink to={`/news/${id}`}>
            <CardMedia component="img" height="194" image={img} alt="Paella dish" />
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
      </FlexNews>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NewsPage = (ids: any) => {
  //TODO переключить на mock axios
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
            <CardMedia component="img" height="400px" image={item.img} alt="Paella dish" />
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
