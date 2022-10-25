import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";


let Todo=()=>{

let [listTodo,setlistTodo]=useState("")
let [listGotTodo,setlistGotTodo]=useState([])

    let ChangeHandle=(e)=>{
setlistTodo(e.target.value)
console.log(listTodo);
    }
let HandleSubmit=(e)=>{
e.preventDefault();
let littt=[...listGotTodo,listTodo]
setlistGotTodo(littt)
console.log(listGotTodo);
setlistTodo("")
}

let deleteData=(index)=>{
    let  displayDelete = listGotTodo.filter((val,ind)=>(
        ind != index
    ))
    setlistGotTodo(displayDelete)
}

let Displaylist= listGotTodo.map((val,index)=>(
    <li key={index}>{val} <Button variant="danger" onClick={()=>deleteData(index)}>delete</Button> 
    </li>
))

return( 
    <>
    <Form>
        <p>todo list</p>
        <Form.Control type="text"  name="todolist"  onChange={ChangeHandle}/>
        <Button onClick={HandleSubmit}>add list</Button>
    </Form>
    <div>
<ul>{Displaylist}</ul>
    </div>
    </>
)
}
export default Todo