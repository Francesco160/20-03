import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="mt-5">
      {}
      <h1>Welcome to My React App!</h1>

      {}
      <Alert variant="success">
        This is a simple welcome alert to notify users about something important!
      </Alert>
    </Container>
  );
};

export default Welcome;
