import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBook = ({ book, onBookSelect, isSelected}) => {
  return (
    <Card className="h-100 shadow-sm"
      onClick={() => onBookSelect(book.asin)} style={{
        border: isSelected ? '2px solid red' : '1px solid lightgray',
        cursor: 'pointer',
      }}>
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Price: ${book.price}</Card.Text>
        {/* Pulsante per i dettagli del libro */}
        <Link to={`/book/${book.asin}`}>
          <Button variant="primary">Dettagli</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
