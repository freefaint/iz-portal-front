import styled from 'styled-components';

export const BackgroundSearch = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.025);
  border-radius: 20px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 14px 42px 0px rgba(8, 15, 52, 0.06);
  width: 100%;
  height: 100%;
  padding: 15px;
  margin-bottom: 15px;

  .MuiInputBase-root {
    width: 34%;
  }

  .MuiTable-root {
    border-radius: 20px;
  }

  .MuiTableCell-head {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    text-align: center;
    font-weight: 600;
  }

  .MuiTableCell-head:last-child {
    border-right: none;
  }

  .MuiOutlinedInput-input input::placeholder {
    text-align: center;
  }

  .MuiTableCell-body:hover {
    /* background: #1976d2; */
    background: rgba(25, 118, 210, 0.5);
    color: #fff;
  }
`;

export const SearchLabel = styled.div`
  font-size: 25px;
  font-weight: 600px;
  margin-bottom: 20px;
`;

export const SwitchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 25%;
`;

export const SwitchText = styled.div``;

export const MoreSwitch = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 20px;
  .MuiTextField-root {
  }

  .MuiInputBase-root {
    width: 100%;
  }
`;
