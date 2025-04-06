import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddComment = ({ bookId, addNewComment }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      comment: comment,
      rate: rate,
      elementId: bookId  // L'elementId è l'asin del libro selezionato
    };

    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkYzNmNDFlMTQwNjAwMTUzMTRjYTEiLCJpYXQiOjE3NDM4NTcxNDUsImV4cCI6MTc0NTA2Njc0NX0.8Byp6n2bbO3KLmJ8RAWK-T1h_9yZOKRFcK9hLxrIEyc'
      },
      body: JSON.stringify(newComment)
    })
    .then((response) => response.json())
    .then(() => {
      addNewComment(newComment);
      setComment('');  // Reset del commento
      setRate(1);      // Reset del rate
    })
    .catch((error) => console.error('Errore durante il POST del commento:', error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Select
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        >
          {[1, 2, 3, 4, 5].map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">Submit Comment</Button>
    </Form>
  );
};

export default AddComment;
