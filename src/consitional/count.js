import {Button } from "react-bootstrap";
import React from "react";

class Chai extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
       }
      increment = ()=>{
            this.setState({counter :this.state.counter+1})
        }
        decrement = ()=>{
            this.setState({counter :this.state.counter-1})
        }
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <Button onClick={this.increment}   >+</Button>
                <Button onClick={this.decrement}   >--</Button>

            </div>
        )
    }
}
export default Chai