import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
// import Marquee  from 'react-fast-marquee';
import NavLink from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Fod from '../media/food1.png';
class Navv extends React.Component
{
 
    render(){
        return (
           <>
           <Navbar bg="LIGHT" >
            <Navbar.Brand><img src={Fod} alt="food img" width="50" height="40" style={{borderRadius:"20%"}}/></Navbar.Brand>
            <Navbar.Brand TY>cheyFOOD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
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
            </Navbar.Collapse>
            </Navbar>
          {/* <div>
            <Marquee>here are great prices </Marquee>
          </div> */}
          </>
        )
    }
}
export default Navv;