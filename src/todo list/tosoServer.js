import React from "react";
import { Form } from "react-bootstrap";


let  TodoServer=()=>{


    let changeFun=(e)=>{
         
    }

    return(
    <>
<h1>cjhwa</h1>

<Form>
    <Form.Control type="text" placeholder="enter todo items" onChange={changeFun}/>
</Form>
     </>

    )
}
export default TodoServer