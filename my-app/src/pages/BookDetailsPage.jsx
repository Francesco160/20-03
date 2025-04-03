import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import booksData from '../books/fantasy.json'; // Importa i dati dei libri
import CommentArea from '../components/CommentArea'; // Importa il componente CommentArea

const BookDetails = () => {
  const { asin } = useParams(); // Ottiene l'ASIN dall'URL
  const book = booksData.find((b) => b.asin === asin); // Trova il libro corrispondente

  if (!book) {
    return <h2 className="text-center mt-5">Errore: Libro non trovato.</h2>;
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg">
      <Card.Img 
  variant="top" 
  src={book.img} 
   
  className="mx-auto mt-3" 
  style={{ width: '200px', height: 'auto' }} 
/>
        <Card.Body className="text-center">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text><strong>Categoria:</strong> {book.category}</Card.Text>
          <Card.Text><strong>Prezzo:</strong> ${book.price}</Card.Text>
        <Card.Body/>
        </Card.Body>
      </Card>

      {/* CommentArea per mostrare i commenti relativi al libro */}
      <CommentArea bookId={book.asin} />
    </Container>
  );
};

export default BookDetails;
