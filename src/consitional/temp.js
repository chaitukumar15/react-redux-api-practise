import React from "react";
import {Button } from "react-bootstrap";
// 2. Temperature Control App -->two buttons(+, -), 
// outputVariable temperature , background color change for outputVariable ) --> 
// if i clicked on + button it should increment by 1, if clicked on - it should 
// decremet by 1 and initial state should be 26c.
// backgroundcolor : <=20c aqua , >20c and <=26c blue  , >26c and <=35c orange
//   , >35c red

class Temp extends React.Component{
    constructor(){
        super();
        this.state={
            temperature:25
        }
    }
    increment = ()=>{
        this.setState({temperature:this.state.temperature + 1})}

        
    decrement = ()=>{
        this.setState({temperature:this.state.temperature - 1 })
        
    }
  
    render() {
       var displ
        if(this.state.temperature <= 20 ){
             displ = <h1 style={{backgroundColor:"blue"}}>{this.state.temperature}</h1>
        }
        else if(this.state.temperature >= 21 && this.state.temperature < 35){
            displ =<h1 style={{backgroundColor:"orange"}}>{this.state.temperature}</h1> 
        }
        else{
            displ =<h1 style={{backgroundColor:"red"}}>{this.state.temperature}</h1> 
        }
        return(
           <div>
            {displ}
          
            <Button onClick={this.increment}   >+</Button>
                <Button onClick={this.decrement}   >--</Button>

           </div> 
        )
    }
}

export default Temp