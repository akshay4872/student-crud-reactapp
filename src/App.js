import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Addstudent from './components/Addstudent';
import Studentdata from './components/studentdata';
import EditDetails from './components/Studentedit';

function App() {
  return (
    <Router>
    <div>
     


    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/Addstudent">Addstudent</Nav.Link>
            <Nav.Link href="/Studentdata/">studentdata</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      

     
    </>


    </div>
    <Routes>
    <Route exact path='/Addstudent' element={<Addstudent/>}/>
    <Route exact path='/Studentdata/' element={<Studentdata/>}/>
    <Route exact path='/edit/:id' element={<EditDetails/>}/>

    </Routes>
    </Router>
  );
}

export default App;
