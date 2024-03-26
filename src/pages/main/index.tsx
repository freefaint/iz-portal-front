import { ChangeEvent, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActions, CardContent, CardMedia, CircularProgress, Collapse, Pagination, Typography } from '@mui/material';
import { newsHttpClient as httpClient } from 'api';
import { RegistryDataContext, RegistryProvider, Service } from 'avrora';
import Comments, { ICommenting } from 'components/atoms/comments/comments';
import CounterLikes from 'components/atoms/counter/counterLikes';
import CounterViews from 'components/atoms/counter/counterViews';
import { ExpandMore } from 'components/atoms/expand-more';
import LikeViever from 'components/atoms/likeViewer/likeViewer';
import { FlexNews, FullNews, NeutralLink } from 'components/atoms/neutral-link';
import { FullCard, FullWidthCard, WrapBox } from 'components/atoms/styled';
import { NewsDto } from 'rest';

import { FullBlock } from './styled';

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
  const itemsPerPage = 9;

  if (!data) {
    return (
      <FullBlock>
        <CircularProgress />
      </FullBlock>
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

        <WrapBox>{currentItems?.map((i) => <NewsItem key={i.id} {...i} />)}</WrapBox>

        <Pagination count={pageCount} page={currentPage} onChange={handleChangePage} />
      </>
    )
  );
};

const NewsItem = ({ id, title, img, date, announce, isLikedByMe, viewsCount, likesCount }: NewsDto) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(isLikedByMe ?? false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLiked = () => {
    setLike(!like);
  };

  return (
    <>
      <FlexNews isLike={like}>
        <FullWidthCard>
          <NeutralLink to={`/news/${id}`}>
            <CardMedia component="img" image={img} alt="Paella dish" />
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
            {likesCount && (
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="likes-counter">
                {isHovered && (
                  <div className="like-viewer">
                    <LikeViever />
                  </div>
                )}
                <CounterLikes count={likesCount} handleLiked={handleLiked} isLike={like} />
              </div>
            )}
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
        </FullWidthCard>
      </FlexNews>
    </>
  );
};

const NewsPage = () => {
  const { item } = useContext(RegistryDataContext);
  const [commentsData, setCommentsData] = useState<ICommenting[]>([]);

  useEffect(() => {
    if (item) {
      const fetchData = async () => {
        try {
          httpClient.getNewsComments(item.id.toString(), { skip: 1, limit: 1 }).then((res) => {
            setCommentsData(res.data.items);
          });
        } catch (error) {
          return error;
        }
      };

      fetchData();
    }
  }, [item]);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLiked = () => {
    setLike(!like);
  };

  return (
    item &&
    commentsData && (
      <>
        <FullNews isLike={item.like}>
          <FullCard>
            <CardMedia component="img" height="25rem" image={item.img} alt="Paella dish" />
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
              <Comments comments={commentsData} />
            </Collapse>
          </FullCard>
        </FullNews>
      </>
    )
  );
};
