import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Formm extends React.Component{
    constructor(props){
        super(props)
this.state={
   todo : [],
   val : ""
} }

valuu=(e)=>{
    e.preventDefault();
    // let a={
    //     name:this.state.val
    // }
this.setState({ 
    todo: this.state.todo.concat(this.state.val),
    // val: "" 
})


}

val=(e)=>{
    this.setState({
        val:e.target.value
    })
}
render(){

    let b=this.state.todo.map(  lit => 
        <li >
         {lit}
          </li>
    )
  
    return (
     <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>todo list </Form.Label>
        <Form.Control type="text" placeholder="Enter todo list"  name="toDo" onChange={this.val} autoComplete />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.valuu}>
        Submit
      </Button>
      
      </Form>
    <ul>
        {b}
    </ul>
     </div>
    )
}
}
export default Formm 