import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import CommentArea from './components/CommentArea'; // Aggiungi il componente CommentArea
import booksData from './books/fantasy.json';  // Import dei libri

function App() {
  const [searchQuery, setSearchQuery] = useState('');  // Stato per la query di ricerca
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);  // Stato per il libro selezionato

  // Funzione per gestire la ricerca
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Passa handleSearch e searchQuery a MyNav */}
      <MyNav searchQuery={searchQuery} onSearch={handleSearch} /> 

      <Container className="flex-grow-1 mt-5">
        <Row>
          <Col md={8}>
            <Welcome />
            {/* Passa searchQuery e setSelectedBookAsin ad AllTheBooks */}
            <AllTheBooks 
              books={booksData} 
              searchQuery={searchQuery} 
              onBookSelect={setSelectedBookAsin}  // Permette di selezionare un libro
            />
          </Col>
          <Col md={4}>
            {/* Mostra CommentArea se è stato selezionato un libro */}
            {selectedBookAsin ? (
              <CommentArea bookId={selectedBookAsin} />
            ) : (
              <p>Seleziona un libro per visualizzare i commenti</p>
            )}
          </Col>
        </Row>
      </Container>
      
      <MyFooter /> 
    </div>
  );
}

export default App;
