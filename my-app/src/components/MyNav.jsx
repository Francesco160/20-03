import React from 'react';
import { Navbar, Form, FormControl} from 'react-bootstrap';

const MyNav = ({ onSearch }) => {
  
  const handleInputChange = (event) => {
    onSearch(event.target.value); 
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">My Bookstore</Navbar.Brand>
      <Form inline className="ml-auto">
        <FormControl
          type="text"
          placeholder="Search for a book"
          className="mr-sm-2"
          onChange={handleInputChange} 
        />
      </Form>
    </Navbar>
  );
};

export default MyNav;
