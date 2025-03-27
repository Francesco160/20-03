import React, { useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import booksData from './books/fantasy.json'; 

function App() {
  const [searchQuery, setSearchQuery] = useState(''); 


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav searchQuery={searchQuery} onSearch={handleSearch} /> 
      
      <Container className="flex-grow-1 mt-5">
        <Welcome />
        <AllTheBooks books={booksData} searchQuery={searchQuery} />
      </Container>
      
      <MyFooter /> 
    </div>
  );
}

export default App;
