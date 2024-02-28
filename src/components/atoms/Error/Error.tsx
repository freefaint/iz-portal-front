import React from 'react';

import ErrorIcon from '@mui/icons-material/Error';

import { Styled } from './styled';

type Props = {
  title?: string;
};
export const Error: React.FC<Props> = ({ title }) => (
  <>
    <Styled.Error>
      <ErrorIcon />
      <Styled.ErrorText>{title}</Styled.ErrorText>
    </Styled.Error>
  </>
);

export default Error;
