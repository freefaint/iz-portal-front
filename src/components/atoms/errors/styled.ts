import styled from 'styled-components';

import { RED } from 'styles';

const Error = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  svg {
    width: 9.375rem;
    height: 9.375rem;
    color: ${RED};
  }
`;
const ErrorText = styled.div`
  font-size: 1.375rem;
`;

export const Styled = {
  Error,
  ErrorText,
};
