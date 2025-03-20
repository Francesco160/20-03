import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p>© 2025 MyApp. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#privacy" className="text-light me-3">
              Privacy Policy
            </a>
            <a href="#terms" className="text-light">
              Terms of Service
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
