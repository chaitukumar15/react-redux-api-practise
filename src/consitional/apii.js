import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { json } from "react-router-dom";

class Apii extends React.Component{
constructor(){
    super();
    this.state={
      listt:{}
    }
}
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users?start=0&_limit=5")
    .then(val=>val).then((da)=>
    {console.log(da.data)
    this.setState({
        listt: da.data
    })
})

}
 
   render(){




    return(
        <>
        <h1>fetching data</h1>
<Button onClick={this.apiAdd}>clicxk</Button>

        </>
    
  ) } 
}
export default Apii