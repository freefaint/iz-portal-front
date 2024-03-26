import styled, { css } from 'styled-components';

import { Box, ListItemIcon, ListItemText } from '@mui/material';

export const MainPageBox = styled(Box)`
  flex-grow: 1;
  padding: 1rem;
`;

export const GrowBox = styled(Box)`
  display: flex;
  flex-grow: 1;
`;

export const GapBox = styled(Box)`
  display: flex;
  flex-grow: 0;
  gap: 1rem;
`;

export const Img = styled.img`
  height: 3rem;
  margin-top: 0.375rem;
`;

export const StyledListItemText = styled(ListItemText)`
  ${({ open }: { open?: boolean }) => css`
    opacity: ${open ? 1 : 0};
  `};
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 0;
  justify-content: center;

  ${({ open }: { open?: boolean }) => css`
    margin-right: ${open ? '0.25rem' : 0};
  `};
`;
