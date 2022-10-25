import React from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class FormVali extends React.Component{
    constructor(){
        super();
this.state={
    a:[],
    b:""
}
    }


    clickEvt= (e)=>{
this.setState(
    {
        b:e.target.name
    }
)

    }

    addOn=(e)=>{
       e.preventDefault()
       this.setState(
        {
            b:"",
            a:[...this.state.a,this.state.b]
        })
    }

    render(){

    let listItem = this.state.a.map( aa=>
        <li >
         {aa}
          </li>

    )
    return(
    <>
    <Form>
     
        <Form.Label>enter the list you are going to do </Form.Label>
        <Form.Control type="text" placeholder="enter list of items you want to do" 
        value={this.state.b} name="olist" onChange={this.clickEvt}  autoComplete />
    <Button onClick={this.addOn}> add the list</Button>
    
      </Form>
      <ul>
        {listItem}
      </ul>
    </>
 )
    }
}
export default FormVali