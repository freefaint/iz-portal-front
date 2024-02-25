import styled from 'styled-components';

const Account = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.025);
  border-radius: 20px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 14px 42px 0px rgba(8, 15, 52, 0.06);
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-bottom: 15px;
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
    color: red;
    font-size: 12px;
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
    font-size: 12px;
  }
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
  padding: 12px;
  font-size: 12px;
  /* background-color: rgba(25, 118, 210, 1); */
  /* background-color: #fff; */
  border: 1px solid rgba(25, 118, 210, 1);
  color: #1976d2;
  cursor: pointer;
  border-top-left-radius: ${(props) => (props.idk === 0 ? '20px' : '0px')};
  border-bottom-left-radius: ${(props) => (props.idk === 0 ? '20px' : '0px')};
  border-bottom-right-radius: ${(props) => (props.idk === props.ids ? '20px' : '0px')};
  border-top-right-radius: ${(props) => (props.idk === props.ids ? '20px' : '0px')};
`;

const ActionBorder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 20px;

  .tb-flex:hover {
    background: #1976d2;
    color: #fff;
    svg {
      color: #fff;
    }
  }
`;

const Active = styled.div`
  display: flex;
  margin-left: 5px;
  svg {
    color: rgba(25, 118, 210, 0.7);
    width: 15px;
    height: 15px;
  }
`;

export const Styled = {
  Account,
  ErrorInfo,
  AccountCardBlock,
  IconCard,
  InfoCard,
  ActionCard,
  ActionTableFlex,
  AccountAction,
  Active,
  ActionBorder,
};
