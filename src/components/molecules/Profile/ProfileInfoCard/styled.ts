import styled from 'styled-components';

const CardInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  margin: 10px 10px 0px 10px;
`;

const PersonName = styled.h2`
  font-size: 15px;
  color: #262626;
  margin: 2px 5px;
`;

const PersonP = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #808080;
  margin: 2px 5px;
  padding-left: 4px;
`;

const Bread = styled.div`
  width: 100%;
  margin: 0px 5px;
  padding-left: 4px;
  a {
    font-size: 12px;
  }

  .MuiBreadcrumbs-separator {
    margin: 0 3px;
  }
  cursor: pointer;
`;

const LinkAction = styled.div`
  color: #1976d2;
  margin-left: 5px;
  cursor: pointer;
`;
const Margin = styled.div`
  margin: 0px 5px;
`;

export const Styled = {
  CardInfoColumn,
  PersonName,
  PersonP,
  Bread,
  LinkAction,
  Margin,
};
