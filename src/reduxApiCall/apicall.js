import { Button } from "react-bootstrap";
import React from "react";
import Table from 'react-bootstrap/Table';
import {useDispatch,useSelector} from "react-redux"
import axios from "axios";


let ApiCall=()=>{

let dispatch=useDispatch();
let select= useSelector(state=>state.listData)
console.log(select);

 let gettingApitwovalues=()=>{

  axios.get("https://jsonplaceholder.typicode.com/users?_limit=2").then(val=>{

  dispatch(
    { type:"apidatatwo",
      payload:val.data}
  )}
    
    )}
let gettingApifivevalues=()=>{

  axios.get("https://jsonplaceholder.typicode.com/users?_limit=5").then(val=>{

  dispatch(
    { type:"apidatafive",
      payload:val.data}
  )}
    
    )}


    let listDataMap=select.map((val,index)=>(
      <tbody key={index}>
        <tr>
          <td>{val.id}</td>
          <td>{val.name}</td>
          <td>{val.phone}</td>
          <td>{val.username}</td>
        </tr>
        
      
      </tbody>
    ))

    return(
        <>
        <h2>api call</h2>
        <Table  bordered  variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      {listDataMap}
    </Table>
        <Button variant="success" onClick={gettingApitwovalues}>fetch 2 values</Button>
        <Button variant="success" onClick={gettingApifivevalues}>fetch 5 values</Button>
        </>
    )
}

export default ApiCall;