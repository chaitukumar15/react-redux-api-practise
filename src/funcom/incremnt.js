import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ApCall(){

const [listt,setListt]=useState(null)

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((val)=>{
        setListt(val)
    })},[])
    if (!listt) return null;
console.log(listt);
    return (
    
    <>
<h1>list</h1>
<h1>{listt.data[0].id}</h1>
<h1>{listt.data[0].name}</h1>

    </>
    )
}
export default ApCall 