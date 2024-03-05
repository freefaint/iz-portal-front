import styled from 'styled-components';

import { ALPHA_BLACK, ALPHA_BLUE, ALPHA_BLUE_100, ALPHA_DARK_BLUE, LINK_COLOR, RED, WHITE } from 'styles';

const Account = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.0625rem solid ${ALPHA_BLACK};
  border-radius: 1.25rem;
  background: ${WHITE};
  box-shadow: 0rem 0.875rem 2.625rem 0rem ${ALPHA_DARK_BLUE};
  width: 100%;
  height: 100%;
  padding: 0.625rem;
  margin-bottom: 1rem;
`;

const AccountAction = styled(Account)`
  flex-direction: row;
`;

const ErrorInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  button {
    width: 100%;
    color: ${RED};
    font-size: 0.75rem;
  }
`;

const AccountCardBlock = styled.div`
  display: flex;
  box-sizing: border-box;
`;
const IconCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 15%;
  box-sizing: border-box;
`;

const InfoCard = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  box-sizing: border-box;
`;

const ActionCard = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  button {
    width: 100%;
    font-size: 0.75rem;
  }
`;

const ActionBorder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1.25rem;

  .tb-flex:hover {
    background: ${LINK_COLOR};
    color: ${WHITE};
    svg {
      color: ${WHITE};
    }
  }
`;

const Active = styled.div`
  display: flex;
  margin-left: 0.25rem;
  svg {
    color: ${ALPHA_BLUE};
    width: 1rem;
    height: 1rem;
  }
`;

const Justify = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionTableFlex = styled.div<{
  ids: number;
  idk: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  font-size: 0.75rem;
  border: 0.0625rem solid ${ALPHA_BLUE_100};
  color: ${LINK_COLOR};
  cursor: pointer;
  border-top-left-radius: ${(props) => (props.idk === 0 ? '1.25rem' : '0rem')};
  border-bottom-left-radius: ${(props) => (props.idk === 0 ? '1.25rem' : '0rem')};
  border-bottom-right-radius: ${(props) => (props.idk === props.ids ? '1.25rem' : '0rem')};
  border-top-right-radius: ${(props) => (props.idk === props.ids ? '1.25rem' : '0rem')};
`;

const ModalH = styled.div`
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Styled = {
  Account,
  ErrorInfo,
  Justify,
  ModalH,
  AccountCardBlock,
  IconCard,
  InfoCard,
  ActionCard,
  ActionTableFlex,
  AccountAction,
  Active,
  ActionBorder,
};
