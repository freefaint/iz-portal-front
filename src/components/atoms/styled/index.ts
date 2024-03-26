import styled from 'styled-components';

import { Box, Card } from '@mui/material';

export const FullWidthCard = styled(Card)`
  min-width: 100%;
`;

export const FullCard = styled(FullWidthCard)`
  min-height: 100%;
`;

export const WrapBox = styled(Box)`
  gap: 1rem;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Block = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const MarginBottom = styled(Block)`
  margin-bottom: 1.25rem;
`;

export const MarginTop = styled(Block)`
  margin-top: 1.25rem;
`;

export const MarginY = styled(Block)`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;
