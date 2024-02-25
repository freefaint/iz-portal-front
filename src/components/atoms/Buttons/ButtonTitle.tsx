import { FC } from 'react';

import { Button } from '@mui/material';

type Props = {
  title: string;
};

export const ButtonTitle: FC<Props> = ({ title }) => <Button>{title}</Button>;

export default ButtonTitle;
