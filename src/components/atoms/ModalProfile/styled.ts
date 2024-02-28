import styled from 'styled-components';

const ModalFlex = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    font-size: 16px;
  }
`;

const MaxDiv = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;

  .MuiFormControl-root {
    margin-bottom: 0px !important;
  }

  .md-item {
    width: 49%;
    padding: 5px;
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
