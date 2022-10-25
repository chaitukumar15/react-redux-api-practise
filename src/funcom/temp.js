import Button from 'react-bootstrap/Button';
import React from "react";
import { useState } from 'react';


let Temp =()=>{

    let [count,setCount]=useState(25)

    

    let incrementt=()=>{
        setCount(count+1)
        }
        
        
    let decrementt=()=>{
          setCount(count-1)  
        }
let temChange;
if(count<=20 ){
    temChange=<h1 style={{color:"blue"}}>{count}</h1>
}
else if(count>=21 && count <=35){
    temChange=<h1 style={{color:"orange"}}>{count}</h1>
}
else{
    temChange=<h1 style={{color:"red"}}>{count}</h1>
}
    return(
        <>
        <h1>temperature</h1>
        <h1>{temChange}</h1>
        <Button onClick={incrementt}>increment</Button>
        <Button  onClick={decrementt}>decrement</Button>
        </>
    )
}
export default Temp