import  Button  from "react-bootstrap/Button";
import React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { BreadcrumbItem } from "react-bootstrap";
class Apilist extends React.Component{
constructor(){
    super();
    this.state={
        listData:[]
    }
}



    handleEvent=(e)=>{
e.preventDefault();
console.log(e.target.name)
let switchCase;
switch(e.target.name){
    case "get-2-row" :
        switchCase=2;
        break;
        case "get-5-row" :
        switchCase=5;
        break;
        case "get-7-row" :
            switchCase=7;
            break;
       default :
      switchCase=10;
        break;
}

axios.get("https://jsonplaceholder.typicode.com/users",{
        params:{
    _limit:switchCase,
        }
    })
    .then((val=>
        {console.log(val.data)
this.setState({
listData:val.data
})

}))

    }




    render(){
        let listDataForm=this.state.listData.map((val)=>
            <tbody>
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.phone}</td>
              <td>{val.username}</td>
            </tr> 
            </tbody>
            )
        return(
            <>
            <h1>list of api deletion (2,3,4,Call)</h1>
            <Table striped bordered hover variant="dark">
            <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      {listDataForm}
    </Table> 
    <Button name="get-2-row" onClick={this.handleEvent}>get 2 rows</Button>
    <Button name="get-5-row" onClick={this.handleEvent}>get 5 rows</Button>
    <Button name="get-7-row" onClick={this.handleEvent}>get 6 rows</Button>
    <Button name="get-10-row" onClick={this.handleEvent}>get 10 rows</Button>
            </>
        )
    }
}

export default Apilist