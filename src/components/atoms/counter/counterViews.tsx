import VisibilityIcon from '@mui/icons-material/Visibility';

import { CounterView } from './styled';

interface CounterProps {
  count: number;
}

export const CounterViews = ({ count }: CounterProps) => (
  <CounterView>
    <VisibilityIcon />
    <span>{count}</span>
  </CounterView>
);

export default CounterViews;
