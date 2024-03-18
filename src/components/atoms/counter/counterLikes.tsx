import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

import { CountBox, CounterLike, CounterText } from './styled';

interface CounterProps {
  count: number;
  isLike: boolean;
  handleLiked: () => void;
}

export const CounterLikes = ({ count, isLike, handleLiked }: CounterProps) => (
  <CounterLike isLike={isLike}>
    <CountBox>
      <IconButton aria-label="add to favorites" onClick={handleLiked}>
        {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <CounterText>{count}</CounterText>
    </CountBox>
  </CounterLike>
);

export default CounterLikes;
