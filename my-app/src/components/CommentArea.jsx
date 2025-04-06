import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import AddComment from './AddComment'; // Importiamo il componente AddComment

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);
  

  useEffect(() => {
    if (bookId) {
      fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkYzNmNDFlMTQwNjAwMTUzMTRjYTEiLCJpYXQiOjE3NDM4NTcxNDUsImV4cCI6MTc0NTA2Njc0NX0.8Byp6n2bbO3KLmJ8RAWK-T1h_9yZOKRFcK9hLxrIEyc"
        }
      })
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Errore fetching dei commenti:", error));
    }
  }, [bookId]);

  const addNewComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };
  

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Header as="h5">Comments</Card.Header>
      <ListGroup variant="flush">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <ListGroup.Item key={comment._id}>
              <strong>{comment.comment}</strong>
              <span className="text-muted"> - {comment.rate}/5</span>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No comments yet.</ListGroup.Item>
        )}
      </ListGroup>
      <Card.Body>
        <AddComment bookId={bookId} addNewComment={addNewComment} />

      </Card.Body>
    </Card>

  );
};

export default CommentArea;
