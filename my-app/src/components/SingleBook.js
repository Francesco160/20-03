import React from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book }) => {
  return (
    <Card className="mb-4">
      {/* Renderizza l'immagine di copertina */}
      <Card.Img variant="top" src={book.img} alt={book.title} />
      
      {/* Renderizza il titolo */}
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Price: ${book.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
