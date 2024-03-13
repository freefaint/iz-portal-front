import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const NeutralLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const FlexNews = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 0.625rem;
  }
`;
