import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  // Funzione per gestire il click sul libro
  const handleClick = () => {
    setSelected(!selected); // Alterna lo stato selezionato
  };

  return (
    <>
      <Card 
        className={`m-3 ${selected ? 'border-danger shadow-lg' : ''}`} 
        onClick={handleClick}
        style={{
          cursor: 'pointer',
          width: '100%', // Usa il 100% di larghezza per gestire meglio il layout
          maxWidth: '18rem', // Limite massimo per la larghezza
          minHeight: '28rem', // Altezza minima per uniformità
          flex: '1 1 300px', // Responsive flex per adattarsi al layout
        }}
      >
        <Card.Img 
          variant="top" 
          src={book.img} 
          alt={book.title} 
          style={{
            height: '15rem', // Altezza fissa maggiore per mostrare meglio le copertine
            objectFit: 'cover', // Mostra l'immagine ritagliata ma mantenendo le proporzioni
          }}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text className="text-muted">Price: ${book.price}</Card.Text>
          </div>
          <Button variant="primary" className="mt-2">
            View Comments
          </Button>
        </Card.Body>
      </Card>

      {selected && <CommentArea bookId={book.asin} />} {/* Mostra CommentArea solo quando selezionato */}
    </>
  );
};

export default SingleBook;
