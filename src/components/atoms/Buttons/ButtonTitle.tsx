import { FC } from 'react';

import { Button } from '@mui/material';

type Props = {
  title: string;
  onClick?: () => void;
};

export const ButtonTitle: FC<Props> = ({ title, onClick }) => <Button onClick={onClick}>{title}</Button>;

export default ButtonTitle;
