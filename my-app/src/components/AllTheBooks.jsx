import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';

const AllTheBooks = ({ books, searchQuery, onBookSelect }) => {
  const [selectedBookAsin, setSelectedBookAsin] = useState(null); // Stato per tracciare il libro selezionato

  // Funzione per gestire la selezione del libro
  const handleBookSelect = (asin) => {
    setSelectedBookAsin(asin); // Aggiorna lo stato con l'ASIN del libro selezionato
    if (onBookSelect) {
      onBookSelect(asin); // Chiamata alla funzione onBookSelect passata come prop (per eventuali altre azioni)
    }
  };

  // Filtra i libri in base al termine di ricerca
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase().trim())  // Confronta il titolo con il testo di ricerca, e usa trim per rimuovere eventuali spazi
  );

  return (
    <Container className="mt-5">
      <h2>All The Fantasy Books</h2>
      <Row>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
              {/* Avvolgi i libri nelle card Bootstrap */}
              <SingleBook 
                book={book} 
                onBookSelect={() => handleBookSelect(book.asin)}  // Passa l'ASIN del libro selezionato
                isSelected={book.asin === selectedBookAsin} // Determina se il libro è selezionato
              />
            </Col>
          ))
        ) : (
          <p>No books found with the given title.</p>
        )}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
