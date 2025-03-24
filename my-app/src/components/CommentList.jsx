import React from 'react';
import SingleComment from './SingleComment'; 

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <h5>Comments</h5>
      <ul>
        {comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />  // Usa l'ID del commento
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
