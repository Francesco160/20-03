import React from 'react';
import { Card } from 'react-bootstrap';
 

const SingleBook = ({ book, onBookSelect, isSelected }) => {
  return (
   <Card
      className="m-3"
      onClick={onBookSelect}
      style={{
        cursor: 'pointer',
        border: isSelected ? '2px solid red' : '1px solid #ccc', // Cambia il bordo se selezionato
        height: '100%' // Assicurati che le card abbiano un'altezza definita
      }}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Price: {book.price} €</Card.Text>
      </Card.Body>
    </Card>
    
  );
};

export default SingleBook;
