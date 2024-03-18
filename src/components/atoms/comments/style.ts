import styled from 'styled-components';

import { Button } from '@mui/material';

const All = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentsList = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const ActionBlock = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  align-items: start;

  .MuiFormControl-root {
    margin-left: 10px;
    height: 35px;
    margin-bottom: 15px;
  }
`;

const Btn = styled(Button)`
  font-size: 10px !important;
  height: 15px;
`;

const CommentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(54, 55, 56, 0.2);
  padding: 10px;
  margin: 10px;
`;

const CommentInfo = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: start;

  a {
    color: #1976d2;
    font-weight: 300;
    text-decoration: none;
  }
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding: 0px 7px;
`;
const Info = styled.div`
  font-size: 13px;
  padding: 0px 5px;
`;
const NewComment = styled.div`
  width: 100%;
  padding: 7px;
  margin-bottom: 20px;
  .MuiFormControl-root {
    width: 100%;
    /* border: 1px solid #1976d2; */
    padding: 6px 15px;
    border-radius: 25px;
  }

  .MuiFormLabel-root {
    font-size: 14px;
    color: #1976d2;
    padding: 0px 15px;
  }
`;

export const Styled = {
  All,
  CommentsBlock,
  CommentsList,
  CommentInfo,
  ActionBlock,
  Btn,
  Text,
  Info,
  NewComment,
};
