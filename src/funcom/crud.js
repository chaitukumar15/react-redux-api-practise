import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';


let Curd=()=>{
    let [list,setList]=useState([])

let funFetch=()=>{
    let apikey="https://jsonplaceholder.typicode.com/users" 
    axios.get(apikey).then(val=>{console.log(val)

        setList(val.data)
        console.log(list);
        })
}

let delk =()=>{
    let  k=list.filter((lists)=>lists.id !== 4)
    setList(k)
  }


console.log(list);
let listData=list.map(
    (val)=>
    <tbody>
    <tr key={val.id}>
      <td>{val.id}</td>
      <td>{val.name}</td>
      <td>{val.phone}</td>
      <td>{val.website}</td>
    </tr>
    </tbody>
)
    return(
        <>
        <h1>fetching ApiCallData</h1>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>phone</th>
          <th>website</th>
        </tr>
      </thead>
     {listData}
    </Table>
   
      
        <Button variant="primary" type="submit" onClick={delk}>
            
        delete id 4
      </Button>
      <Button variant="primary" type="submit" onClick={funFetch}>
            FETCH DATA 
      </Button>
    
        </>
    )
}

export default Curd