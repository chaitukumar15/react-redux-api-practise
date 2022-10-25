import axios from "axios";
import React from "react";
import { useState } from "react";
import { createRef } from "react";
import { Button, Form } from "react-bootstrap";

let ControlledCom=()=>{

    let [ImgData,setLisst] =useState();
    let [gotImg,setgotImg] =useState()

let ffile= React.createRef();
console.log(ImgData);

console.log(ffile);

    let changeHandle=(e)=>{
        
        console.log(e);
console.log(e.target.value);
setLisst(URL.createObjectURL(e.target.files[0]))



    }

    let changeClick=()=>{
        alert("sdgtsd")
      
        let k={
            id:1,
            images:`${ImgData}`
        }
        axios.post( "http://localhost:3001/profile ",k)
        .then(val=> console.log(val.data))
   axios.get("http://localhost:3001/profile")
   .then(val=>
    {console.log(val.data)
        console.log(val.data[1].images)
    setgotImg(val.data[1].images)})
    }
    return(
        <>

        <h1>{ImgData}</h1>
        
        <img src={ImgData} alt="images" width={200} height={300} />
        <Form >
            <Form.Control type="file" placeholder="enter user" name="user" onChange={changeHandle}/>
            
            <Form.Control type="file" placeholder="enter user" name="user" ref={ffile} />
            <Button variant="success" onClick={changeClick}>sublit</Button>
       </Form>
       <img src={gotImg} alt="images" width={200} height={300} />
        </>
    )
}
export default ControlledCom