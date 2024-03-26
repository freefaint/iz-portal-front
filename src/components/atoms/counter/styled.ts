import styled from 'styled-components';

import { ALPHA_GRAY, GRAY_BLUE, RED, RGB_GRAY } from 'styles';

export const CounterView = styled.div`
  display: flex;
  svg {
    margin-right: 0.25rem;
    color: ${RGB_GRAY};
  }

  span {
    color: ${ALPHA_GRAY};
  }
`;

export const CountBox = styled.div`
  width: 100%;
  display: flex;
  margin-right: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const CounterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  color: ${ALPHA_GRAY};
  font-weight: 500;
`;

export const CounterLike = styled.div<{
  isLike: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 2.5rem;
  }

  svg {
    color: ${(p) => (p.isLike ? RED : GRAY_BLUE)};
  }
`;
