import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import booksData from '../books/fantasy.json';  

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData); 
  }, []);

  return (
    <Container className="mt-5">
      <h2>All The Fantasy Books</h2>
      <Row>
        {books.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  Price: ${book.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
