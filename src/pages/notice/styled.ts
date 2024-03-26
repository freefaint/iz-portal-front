import styled from 'styled-components';

import { Box } from '@mui/material';

export const MarginBox = styled(Box)`
  margin: 1rem 0;
`;

export const GapMarginBox = styled(MarginBox)`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
