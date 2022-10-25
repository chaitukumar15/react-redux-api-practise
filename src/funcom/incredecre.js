import Button from 'react-bootstrap/Button';
import React from "react";
import { useState } from 'react';


let Ince=()=>{

    let [count,setCount]=useState(0)
    let incrementt=()=>{
        setCount(count+1)
        }
        let decrementt=()=>{
          setCount(count-1)  
        }



    return(
        <>
        {/* <h1>{setCount(2)}</h1> */}
        <h1>{count}</h1>
        <h1>increment and decrement </h1>
        <Button onClick={incrementt}>increment</Button>
        <Button  onClick={decrementt}>decrement</Button>
        </>
    )

}
export default Ince
