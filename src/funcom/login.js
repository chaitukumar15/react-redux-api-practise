import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Hifi from "./disp"
import { Link } from "react-router-dom";

let LogIN=()=>{

let [username,setUsername]=useState("");
let [password,setPassword]=useState("")


    let user1=(e)=>{
setUsername(e.target.value)
    }

    let user2=(e)=>{
setPassword(e.target.value)
    }

let loginAdd=(e)=>{
    e.preventDefault();
axios.get(" http://localhost:3001/posts")
.then(val=>{
    let k=val.data;
let kk= k.map((val)=>val.password)
let kl= k.map((val)=>val.Emailaddress)
let passwd=[...kk]

console.log(passwd);
let emaill=[...kl]
// emaill.push(kl)
console.log(emaill);


let bolen= passwd.some((val)=> val == password)
console.log(bolen);
let bolen1= emaill.some((val)=> val == username)
console.log(bolen1);



if(bolen == true && bolen1 == true){
    window.open("/user")
}
else{
    window.open("/noreg")
}

})

}

    return(
        <>

        <h1>login page</h1>
    <Form>
      <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={user1}/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={user2}/>
       <Button variant="primary" type="submit" onClick={loginAdd}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default LogIN