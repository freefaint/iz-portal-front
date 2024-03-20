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
`;

export const FlexNews = styled.div<{
  isLike?: boolean;
}>`
  display: flex;
  align-items: center;
  width: 32%;

  .likes-counter {
    position: relative;
  }

  .like-viewer {
    position: absolute;
    top: -50%;
    left: 23%;
  }

  @media screen and (max-width: 950px) {
    width: 48%;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
