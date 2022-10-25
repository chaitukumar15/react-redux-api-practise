import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Homepage,AfterLogin,Footer,Home,JoinUS,Address,Collabs,PagenotFound}  from "./home"


let DisplayPage=()=>{
let [isloggedyar,setIsloggedyar]=useState(sessionStorage.getItem("isLoggedIn"))
console.log(isloggedyar);


    return(
        <>
        { isloggedyar  ? <AfterLogin/> :<Homepage/> }

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
              <Route path="/joinus" element={<JoinUS/>} />
                <Route path="/Address" element={<Address/>}/>
                <Route path="/Collabs" element={<Collabs/>}/>
                <Route path="*" element={<PagenotFound/>}/>
            </Routes>
            </BrowserRouter>
        
        <Footer/>
        </>
    )
}

export default DisplayPage
