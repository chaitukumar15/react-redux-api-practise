import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

class Register extends React.Component{
constructor(){
    super()
this.state={
    fname:" " ,
    sname:" ",
    father:" ",
    mname: " ",
    listt:[]
}
}

fname=(e)=>{
    this.setState(
        {
            [e.target.name]:e.target.value
        }
    )
}
submitt=(e)=>{
e.preventDefault()
this.setState(
    {
      listt : [...this.state.listt,this.state.fname]
    }
)
console.log(this.state.listt);
}


render(){

    let lt= this.state.listt.map(val=>
        <li>
            {val}
        </li>

    )
    return(
      <>
      <Form>
      <Form.Label>firstName</Form.Label>
        <Form.Control type="text" placeholder="Enter firstName" name="fname" onChange={this.fname}/>

        <Form.Label>SecondName</Form.Label>
        <Form.Control type="text" placeholder="Enter SecondName" name="sname" onChange={this.fname}/>

        <Form.Label>father-Name</Form.Label>
        <Form.Control type="text" placeholder="Enter father-Name" name="father"  onChange={this.fname}/>

        <Form.Label>mother-Name</Form.Label>
        <Form.Control type="text" placeholder="Enter mother-Name"  name="mname" onChange={this.fname}/>
{/* 
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  />
        
        <Form.Label>phone Number</Form.Label>
        <Form.Control type="text" placeholder="phone Number" />


        <Form.Check type="checkbox" label="Check me out" /> */}
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      <h1>{this.state.fname}</h1>
      <h1>{this.state.sname}</h1>
      <h1>{this.state.father}</h1>
      <h1>{this.state.mname}</h1>
   <h1>{lt}</h1>
      </> 
    )
}
}
export default Register