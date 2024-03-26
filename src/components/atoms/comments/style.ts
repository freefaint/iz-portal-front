import styled from 'styled-components';

import { Button } from '@mui/material';
import { LINK_COLOR } from 'styles';

const All = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentsList = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
`;

const ActionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  .MuiFormControl-root {
    margin-left: 0.75rem;
    height: 2.25rem;
    margin-bottom: 1rem;
  }
`;

const Btn = styled(Button)`
  font-size: 0.625rem !important;
  height: 1rem;
`;

const CommentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0cap.0625rem solid rgb(54, 55, 56, 0.2);
  padding: 0.75rem;
  margin: 0.75rem;
`;

const CommentInfo = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: start;

  a {
    color: ${LINK_COLOR};
    font-weight: 300;
    text-decoration: none;
  }
`;
const Text = styled.div`
  font-size: 1rem;
  font-weight: 400;
  padding: 0 0.5rem;
`;
const Info = styled.div`
  font-size: 0.75rem;
  padding: 0 0.25rem;
`;
const NewComment = styled.div`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.25rem;
  .MuiFormControl-root {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
  }

  .MuiFormLabel-root {
    font-size: 0.875rem;
    color: ${LINK_COLOR};
    padding: 0 1rem;
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
