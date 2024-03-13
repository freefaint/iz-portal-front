import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const NeutralLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const Comments = styled.div``;

export const Notices = styled.div<{
  isLike?: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;

  .icon-like {
    color: ${(p) => (p.isLike ? '#EB0101' : '#756B6B')};
  }
`;

export const FlexNews = styled.div<{
  isLike?: boolean;
}>`
  display: flex;
  align-items: center;
  width: 32%;

  .icon-like {
    color: ${(p) => (p.isLike ? '#EB0101' : '#756B6B')};
  }

  img {
    margin-left: 10px;
  }

  @media screen and (max-width: 950px) {
    width: 48%;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
