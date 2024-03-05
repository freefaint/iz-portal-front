import React from 'react';

import ErrorIcon from '@mui/icons-material/Error';

import { Styled } from './styled';

interface IProps {
  title?: string;
}

export const Error: React.FC<IProps> = ({ title }) => (
  <>
    <Styled.Error>
      <ErrorIcon />
      <Styled.ErrorText>{title}</Styled.ErrorText>
    </Styled.Error>
  </>
);

export default Error;
