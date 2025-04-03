import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNav = ({ searchQuery, onSearch }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/"> MyBookStore</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search books..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
      </Form>
    </Navbar>
  );
};

export default MyNav;
