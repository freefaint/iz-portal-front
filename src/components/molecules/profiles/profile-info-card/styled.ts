import styled from 'styled-components';

import { DARK_GRAY, GRAY, LINK_COLOR } from 'styles';

const CardInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  margin: 0.625rem 0.625rem 0rem 0.625rem;
`;

const PersonName = styled.h2`
  font-size: 1rem;
  color: ${DARK_GRAY};
  margin: 0.125rem 0.25rem;
`;

const PersonP = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${GRAY};
  margin: 0.125rem 0.25rem;
  padding-left: 0.25rem;
`;

const Bread = styled.div`
  width: 100%;
  margin: 0rem 0.25rem;
  padding-left: 0.25rem;
  a {
    font-size: 0.75rem;
  }

  .MuiBreadcrumbs-separator {
    margin: 0 0.2;
  }
  cursor: pointer;
`;

const LinkAction = styled.div`
  color: ${LINK_COLOR};
  margin-left: 0.25rem;
  cursor: pointer;
`;
const Margin = styled.div`
  margin: 0rem 0.25rem;
`;

export const Styled = {
  CardInfoColumn,
  PersonName,
  PersonP,
  Bread,
  LinkAction,
  Margin,
};
