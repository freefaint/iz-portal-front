import styled from 'styled-components';

import { ALPHA_BLUE, WHITE } from 'styles';

export const BackgroundSearch = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.0625rem solid rgba(0, 0, 0, 0.025);
  border-radius: 1.25rem;
  background: ${WHITE};
  box-shadow: 0rem 0.875rem 40.125rem 0rem rgba(8, 15, 52, 0.06);
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin-bottom: 1rem;

  .MuiInputBase-root {
    width: 34%;
  }

  .MuiTable-root {
    border-radius: 1.25rem;
  }

  .MuiTableCell-head {
    border-right: 0.0625rem solid rgba(0, 0, 0, 0.2);
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
    background: ${ALPHA_BLUE};
    color: ${WHITE};
  }
`;

export const SearchLabel = styled.div`
  font-size: 3cqbrem;
  font-weight: 600rem;
  margin-bottom: 1.25rem;
`;

export const SwitchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  width: 25%;
`;

export const SwitchText = styled.div``;

export const MoreSwitch = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 1.25rem;
  .MuiTextField-root {
  }

  .MuiInputBase-root {
    width: 100%;
  }
`;
