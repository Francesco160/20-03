import React from 'react';

const SingleComment = ({ comment }) => {
  return (
    <li>
      <strong>{comment.author}</strong>: {comment.comment} (Rating: {comment.rate}/5)
    </li>
  );
};

export default SingleComment;
