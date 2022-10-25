 import React from "react";
 import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import Coup from './classfolder/home';
 import Navv from './classfolder/navv';
 import Appr from './classfolder/acor';
import Addr from './classfolder/mapp';
import Footy from './classfolder/fott';


 class Routerr extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <Appr/>
  <BrowserRouter>
            <Navbar bg="light" varient="white">
<Navbar.Brand> cheyFOOD</Navbar.Brand>
<Nav> 
<Nav.Link href="/list">Home</Nav.Link>
<Nav.Link href="/address">restaurant menu</Nav.Link>
<Nav.Link href="/">list of our branches</Nav.Link>
<Nav.Link href="/footer">address</Nav.Link>
<Nav.Link href="/addr">location</Nav.Link>
</Nav>
</Navbar>
            <Routes>
            <Route path="/" element={<Navv/>}/>
                <Route path="/footer" element={<Footy/>}/>
                <Route path="/list" element={<Coup/>}/>
                <Route path="/address" element={<Appr/>}/>
                <Route path="/addr" element={<Addr/>}/>
            </Routes>
            </BrowserRouter>
            </>
        )
    }
 }
 export default Routerr