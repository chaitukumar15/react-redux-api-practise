import React from "react";
import Registration from "./registration.js";
import LogIN from "./login.js";
import { BrowserRouter, Routes, Route, Link,Switch } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Hifi,NoData} from "./disp"
// import Fot from "../footr"

let DisplayFun=()=>{
    
    
    
    let k=   
    <Navbar bg="light" varient="white">
  
    <Nav> 
   
    <Nav.Link href="/home">login</Nav.Link>
    <Nav.Link href="/foote">register</Nav.Link>
    
    </Nav>
    </Navbar>
            
    return(
        <>
   
       <BrowserRouter>
       {k}
      
    
      <Routes>
     
                <Route path="/home" element={<LogIN/>}/>
                <Route path="/foote" element={<Registration/>}/>
                <Route path="/user" element={<Hifi/>}/>
                <Route path="/noreg" element={<NoData/>}/>
            </Routes>
      
    </BrowserRouter>
    {/* <Fot/> */}
        </>
    )
}
export default DisplayFun
