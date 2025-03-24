import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import booksData from '../books/fantasy.json';  // Importa i dati JSON
import SingleBook from './SingleBook';  // Importa il componente SingleBook

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);  // Stato per i libri
  const [searchTerm, setSearchTerm] = useState('');  // Stato per il valore dell'input di ricerca

  // Imposta i dati importati direttamente nel componente
  useEffect(() => {
    setBooks(booksData); // Imposta i dati nel componente
  }, []);

  // Funzione per aggiornare lo stato del campo di ricerca
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtra i libri in base al termine di ricerca
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())  // Confronta il titolo con il testo di ricerca
  );

  return (
    <Container className="mt-5">
      <h2>All The Fantasy Books</h2>

      {/* Campo di input per la ricerca */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search for a book by title..."
          value={searchTerm}  // Valore legato allo stato searchTerm
          onChange={handleSearch}  // Aggiorna il valore quando l'utente digita
        />
      </Form.Group>

      <Row>
        {/* Usa il map() per rendere una lista di componenti SingleBook filtrata */}
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
              {/* Renderizza il componente SingleBook e passa il libro come props */}
              <SingleBook book={book} />
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
