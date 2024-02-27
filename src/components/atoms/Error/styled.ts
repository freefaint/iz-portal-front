import styled from 'styled-components';

const Error = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  svg {
    width: 150px;
    height: 150px;
    color: red;
  }
`;
const ErrorText = styled.div`
  font-size: 26px;
`;

export const Styled = {
  Error,
  ErrorText,
};
