import styled from 'styled-components';

const ModalFlex = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    font-size: 1rem;
  }
`;

const MaxDiv = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-wrap: wrap;

  .MuiFormControl-root {
    margin-bottom: 0rem !important;
  }

  .md-item {
    width: 49%;
    padding: 0.25rem;
  }
`;
const Justify = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Styled = {
  ModalFlex,
  MaxDiv,
  Justify,
};
