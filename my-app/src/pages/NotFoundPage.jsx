import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-3 text-danger">404</h1>
      <h2 className="text-muted">Page Not Found</h2>
      <p className="lead">Oops! The page you are looking for does not exist.</p>
    </Container>
  );
};

export default NotFound;
