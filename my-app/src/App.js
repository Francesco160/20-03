import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <MyNav />
    
    <Container className="flex-grow-1 mt-5">
    <Welcome />
    </Container>
    <AllTheBooks />
    <MyFooter /> 
  </div>
);
}

export default App;
