import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';  

const AllTheBooks = ({ books, searchQuery }) => {
  
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())  
  );

  return (
    <Container className="mt-5">
      <h2>All The Fantasy Books</h2>

      <Row>
       
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
             
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
