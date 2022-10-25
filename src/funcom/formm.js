import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


let FormDta=()=>{
let [listt,setListt]=useState("")
let [valuee,setValuee]=useState([])

let TodoList=(e)=>{

setListt(e.target.value)
}

let addlistt=(e)=>{
e.preventDefault();
setValuee(
    [...valuee,listt]
)

}
let listData= valuee.map(val=>
    <li>{val}</li>
    
    )

    return(
        <>
        <h1>TodoList</h1>
        <Form>
        <Form.Control type="email" placeholder="Enter email" name="listt" onChange={TodoList}/>
        <Button variant="primary" type="submit" onClick={addlistt}>
       addList
      </Button>
        </Form>
         <ul>{listData}</ul>
        {/* <h1>{listt}</h1> */}
        </>
    )
}
export default FormDta