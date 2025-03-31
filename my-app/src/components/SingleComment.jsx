import React from 'react';

const SingleComment = ({ comment }) => {
  return (
    <li className="list-group-item">
      <p><strong>Comment:</strong> {comment.comment}</p>
      <p><strong>Rating:</strong> {comment.rate}/5</p>
      {/* Mostra l'email dell'autore, se presente */}
      {comment.author && comment.author.email && (
        <p className="small text-muted">
          <strong>Email:</strong> {comment.author.email}
        </p>
      )}
    </li>
  );
};

export default SingleComment;
