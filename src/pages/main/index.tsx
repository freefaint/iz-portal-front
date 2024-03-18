import { ChangeEvent, useContext, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Collapse,
  IconButton,
  IconButtonProps,
  Pagination,
  Typography,
  styled,
} from '@mui/material';
import { newsHttpClient as httpClient } from 'api';
import { RegistryDataContext, RegistryProvider, Service } from 'avrora';
import Comments, { Commenting } from 'components/atoms/comments/comments';
import CounterLikes from 'components/atoms/counter/counterLikes';
import CounterViews from 'components/atoms/counter/counterViews';
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
        {id && <NewsPage />}
      </RegistryProvider>
    </>
  );
}

const NewsList = () => {
  const { data } = useContext(RegistryDataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (!data) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    currentItems && (
      <>
        <Typography variant="h4">Новости</Typography>

        <Box style={{ gap: '1rem', margin: '1rem 0', display: 'flex', flexWrap: 'wrap' }}>
          {currentItems?.map((i) => <NewsItem key={i.id} {...i} />)}
        </Box>
        <Pagination count={pageCount} page={currentPage} onChange={handleChangePage} />
      </>
    )
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

const NewsItem = ({ id, title, img, date, announce, isLikedByMe, viewsCount, likesCount }: NewsDto) => {
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
      <FlexNews isLike={like}>
        <Card sx={{ minWidth: '100%' }}>
          <NeutralLink to={`/news/${id}`}>
            <CardMedia component="img" height="194" image={img} alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {announce}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(date).toLocaleString()}
              </Typography>
            </CardContent>
          </NeutralLink>
          <CardActions disableSpacing>
            {likesCount && <CounterLikes count={likesCount} handleLiked={handleLiked} isLike={like} />}
            {viewsCount && <CounterViews count={viewsCount} />}
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded}>
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{title}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </FlexNews>
    </>
  );
};

const comments: Commenting[] = [
  {
    id: '1',
    text: 'я думаю это хороший комментарий',
    date: new Date().toISOString(),
    author: 'Терещенко А.Д',
  },
  {
    id: '2',
    text: 'поддерживаю',
    date: new Date().toISOString(),
    author: 'Попов А.Д',
    parentId: '1',
  },
  {
    id: '3',
    text: 'согласен',
    date: new Date().toISOString(),
    author: 'Дмитриев К.Д',
    parentId: '1',
  },
  {
    id: '4',
    text: 'интересный пост',
    date: new Date().toISOString(),
    author: 'Минин А.Д',
  },
  {
    id: '5',
    text: 'да-да',
    date: new Date().toISOString(),
    author: 'Турский А.Д',
    parentId: '4',
  },
];

const NewsPage = () => {
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
              {item.likesCount && <CounterLikes count={item.likesCount} handleLiked={handleLiked} isLike={like} />}
              <ExpandMore expand={true} onClick={handleExpandClick} aria-expanded={expanded}></ExpandMore>
            </CardActions>
            <Collapse in={true} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{item.text}</Typography>
              </CardContent>
              <Comments comments={comments} />
            </Collapse>
          </Card>
        </FlexNews>
      </>
    )
  );
};
