// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import  "./App.css"
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import  NavbarBrand  from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Fod from '../media/food1.png';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
function Cor() {
   return (
    <div >
      
     <Navbar bg = "dark" variant='dark' className="B">
      <Container>
        <Navbar.Brand><img src={Fod} alt="food img" width="50" height="40" style={{borderRadius:"20%"}}/></Navbar.Brand>
     <Navbar.Brand>foodYataro</Navbar.Brand>
     <Navbar.Toggle />

     <Navbar.Collapse id="navbarScroll" className="justify-content-end">
       <Nav>
       <Nav.Link href="#home">home</Nav.Link>
       <Nav.Link href="#home"></Nav.Link>
<NavDropdown title="vegan">
   <NavDropdown.Item href="#non">Non-diary</NavDropdown.Item>
   <NavDropdown.Item href="#non">SoyaBased</NavDropdown.Item>
   <NavDropdown.Item href="#non">bread</NavDropdown.Item>
   <NavDropdown.Divider />
   <NavDropdown.Item href="#non">plantBased-Meat</NavDropdown.Item>
</NavDropdown>
<NavDropdown title="Non-veg">
   <NavDropdown.Item href="#non">Meat</NavDropdown.Item>
   <NavDropdown.Item href="#non">Seafood</NavDropdown.Item>
   <NavDropdown.Item href="#non">bread</NavDropdown.Item>
   <NavDropdown.Divider />
   <NavDropdown.Item href="#non">barbecue</NavDropdown.Item>
</NavDropdown>
       </Nav>
      
       <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
           />
           <Button variant="success" >Search</Button>
      </Form>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    
    </div>

 

   )
    
}
export default Cor;