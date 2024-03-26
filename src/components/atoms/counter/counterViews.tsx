import VisibilityIcon from '@mui/icons-material/Visibility';

import { CounterView } from './styled';

interface ICounterViewsProps {
  count: number;
}

export const CounterViews = ({ count }: ICounterViewsProps) => (
  <CounterView>
    <VisibilityIcon />
    <span>{count}</span>
  </CounterView>
);

export default CounterViews;
