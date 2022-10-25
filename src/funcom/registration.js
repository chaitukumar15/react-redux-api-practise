import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


let Registration =()=>{

let [firstName,setFirstName]=useState("");
let [secondName,setSecondName]=useState("");
let [emailaddress,setEmailaddress]=useState("");
let [Password,setPassword]=useState("");


let handleEvent=(e)=>{
    setFirstName(e.target.value)
}
let handleEvent1=(e)=>{
    setSecondName(e.target.value)
}

let handleEvent3=(e)=>{
    setPassword(e.target.value)
}
let handleEvent2=(e)=>{
    setEmailaddress(e.target.value)
}

let objdata={
    FirstName:firstName,
    SecondName:secondName,
    Emailaddress:emailaddress,
    password:Password
}



let eventHandle=(e)=>{
e.preventDefault();
axios.post(" http://localhost:3001/posts",objdata)
.then((val)=>console.log(val))
}

    return(
        <>
        <h1>welcome to registration form </h1>
        <Form>
       <Form.Label>firstName</Form.Label>
        <Form.Control type="text" placeholder="firstName" name="firstName" onChange={handleEvent}/>
        <Form.Label>secondName</Form.Label>
        <Form.Control type="text" placeholder="secondName" name="secondName" onChange={handleEvent1}/> 
        <Form.Label>Emailaddress</Form.Label>
        <Form.Control type="email" placeholder="Enteremail" name="Enteremail" onChange={handleEvent2}/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="Password"  onChange={handleEvent3} />
       <Button variant="primary" type="submit"  onClick={eventHandle}>
        Submit
       </Button>

    </Form>
    <h1>after submiting go to login page by clicking above in navbar</h1>
        </>
    )
}
export default Registration