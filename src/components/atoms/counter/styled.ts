import styled from 'styled-components';

export const CounterView = styled.div`
  display: flex;
  svg {
    margin-right: 5px;
    color: rgb(130, 130, 130);
  }

  span {
    color: rgb(51, 51, 51, 0.9);
  }
`;

export const CountBox = styled.div`
  width: 100%;
  display: flex;
  margin-right: 7px;
  justify-content: center;
  align-items: center;
`;

export const CounterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: rgb(51, 51, 51, 0.9);
  font-weight: 500;
`;

export const CounterLike = styled.div<{
  isLike: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 40px;
  }

  svg {
    color: ${(p) => (p.isLike ? 'red' : 'rgb(225, 227, 230)')};
  }
`;
