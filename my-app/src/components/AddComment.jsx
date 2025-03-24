import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddComment = ({ bookId, setComments }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('1'); 
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const newComment = {
      comment,         // Testo della recensione
      rate: rating,    // Valutazione come stringa (da 1 a 5)
      elementId: bookId // ASIN del libro (elementId)
    };

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkYzNmNDFlMTQwNjAwMTUzMTRjYTEiLCJpYXQiOjE3NDI1NzA4MDksImV4cCI6MTc0Mzc4MDQwOX0.Dar2Et9PmxMA8cP8V3PM6KwYkkjcvIen5h39tzHqR1A',
        },
        body: JSON.stringify(newComment), // Invia il corpo come stringa JSON
      });

      if (response.ok) {
        const savedComment = await response.json();
        setComments((prevComments) => [...prevComments, savedComment]); // Aggiorna la lista dei commenti
        setComment('');  // Resetta il campo testo
        setAuthor('');   // Resetta il campo autore
        setRating('1');  // Resetta la valutazione
      } else {
        throw new Error('Failed to post comment');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="my-4">
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rating">
        <Form.Label>Rating</Form.Label>
        <Form.Select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          {['1', '2', '3', '4', '5'].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Add Comment
      </Button>
    </Form>
  );
};

export default AddComment;
