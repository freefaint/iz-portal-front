import styled from 'styled-components';

import { Box } from '@mui/material';
import { Block } from 'components/atoms/styled';

export const MarginBox = styled(Box)`
  margin: 1rem 0;
`;

export const GapMarginBox = styled(MarginBox)`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const FullBlock = styled(Block)`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
