import { FC } from 'react';

import { Button } from '@mui/material';

interface IProps {
  title: string;
  onClick?: () => void;
}

export const ButtonTitle: FC<IProps> = ({ title, onClick }) => <Button onClick={onClick}>{title}</Button>;

export default ButtonTitle;
