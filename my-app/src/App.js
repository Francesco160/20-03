import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import NotFound from './pages/NotFoundPage';
import Welcome from './components/Welcome';
import BookDetails from './pages/BookDetailsPage';
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
    <Router>
    <div className="d-flex flex-column min-vh-100">
      {/* Passa handleSearch e searchQuery a MyNav */}
      <MyNav searchQuery={searchQuery} onSearch={handleSearch} /> 

      <Container className="flex-grow-1 mt-5">
      <Routes>
            <Route
              path="/"
              element={<AllTheBooks books={booksData} searchQuery={searchQuery} onBookSelect={setSelectedBookAsin} />}
            />
            <Route path="/book/:asin" element={<BookDetails />} />
            {/* Route per i commenti */}
            <Route path="/comments/:bookId" element={<CommentArea bookId={selectedBookAsin} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        
      </Container>
      
      <MyFooter />
      
    </div>
    </Router>
  );
}

export default App;
