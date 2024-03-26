import React, { ChangeEvent, FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { TextField } from '@mui/material';

import { Styled } from './style';

export interface ICommenting {
  id: string;
  text: string;
  date: string;
  author: string;
  parentId?: string;
  showReplyInput?: boolean;
}

interface IRenderedCommentProps {
  comment: ICommenting;
  comments: ICommenting[];
  updateComments: (newComments: ICommenting[]) => void;
}

const RenderedComment: FC<IRenderedCommentProps> = memo(({ comment, comments, updateComments }) => {
  const [replyText, setReplyText] = useState('');
  const [showReplyInput, setShowReplyInput] = useState(false);

  const childComments = useMemo(() => comments.filter((c) => c.parentId === comment.id), [comments, comment]);

  const handleClickReply = () => {
    setShowReplyInput(true);
  };

  const handleChangeReplyText = (event: ChangeEvent<HTMLInputElement>) => {
    setReplyText(event.target.value);
  };

  const handleBlur = () => {
    setShowReplyInput(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendRequest(replyText);
      setShowReplyInput(false);
    }
  };

  const sendRequest = (replyText: string) => {
    const updatedComments = [
      ...comments,
      {
        id: (comments.length + 1).toString(),
        text: replyText,
        date: `${new Date().toISOString()}`,
        author: 'Терещенко',
        parentId: comment.id,
      },
    ];
    updateComments(updatedComments);
    setReplyText('');
  };

  return (
    <Styled.CommentsBlock>
      <Styled.CommentInfo>
        <Styled.CommentInfo>
          <Styled.Info>
            <Link to={`/profile/${comment.author}`}>{comment.author} </Link>{' '}
            {`${new Date(comment.date).getHours()}:${new Date(
              comment.date,
            ).getMinutes()} ${new Date(comment.date).getDate()}.${new Date(comment.date).getMonth() + 1}`}
          </Styled.Info>
          <Styled.Text>{comment.text}</Styled.Text>
        </Styled.CommentInfo>
        <Styled.ActionBlock>
          <Styled.Btn onClick={handleClickReply}>Ответить</Styled.Btn>
          {showReplyInput && (
            <TextField
              id="standard-basic"
              label="Оставить комментарий"
              variant="standard"
              value={replyText}
              onChange={handleChangeReplyText}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          )}
        </Styled.ActionBlock>
      </Styled.CommentInfo>
      {childComments.length > 0 && (
        <div>
          {childComments.map((childComment) => (
            <RenderedComment
              key={childComment.id}
              comment={childComment}
              comments={comments}
              updateComments={updateComments}
            />
          ))}
        </div>
      )}
    </Styled.CommentsBlock>
  );
});

interface ICommentsProps {
  comments: ICommenting[];
}

const Comments: FC<ICommentsProps> = ({ comments }) => {
  const [updatedComments, setUpdatedComments] = useState(comments);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    if (comments) {
      setUpdatedComments(comments);
    }
  }, [comments]);

  const updateComments = useCallback((newComments: ICommenting[]) => {
    setUpdatedComments(newComments);
  }, []);

  const addNewComment = (text: string) => {
    // TODO вставить текущий id пользователя из api
    const updatedComment = [
      ...updatedComments,
      { id: `${comments.length + 1}`, text, date: `${new Date().toISOString()}`, author: 'Терещенко' },
    ];
    updateComments(updatedComment);
    setNewCommentText('');
  };

  const rootComments = updatedComments.filter((comment) => !comment.parentId);

  const handleNewCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCommentText(event.target.value);
  };

  const handleNewCommentKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addNewComment(newCommentText);
    }
  };

  return (
    <Styled.All>
      {rootComments.map((comment) => (
        <RenderedComment
          key={comment.id}
          comment={comment}
          comments={updatedComments}
          updateComments={updateComments}
        />
      ))}
      <Styled.NewComment>
        <TextField
          id="new-comment-input"
          label="Новый комментарий"
          variant="standard"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onKeyDown={handleNewCommentKeyDown}
        />
      </Styled.NewComment>
    </Styled.All>
  );
};

export default Comments;
