import React from "react";
import { useState } from "react";

let Dummyprac=()=>{

let [sli,setlit]=useState({
    username:"",
    firstname:""
})

let [ani,setani]=useState()
    let eventHANDLE =(e)=>{
setlit({
    [e.target.name]:e.target.value
})


console.log(sli);
    }

    let clickhandle=(e)=>{
e.preventDefault();


    }

    return(
        <>
        <h1>hello</h1>
        <form>
            <input type="text" placeholder="hello write" name="username"  onChange={eventHANDLE}/>
            <input type="text" placeholder="hello write" name="firstname" onChange={eventHANDLE}/>
            <input type="submit" onClick={clickhandle}/>
            {/* <input type="text" placeholder="hello write" name="secondname" onChange={eventHANDLE}/> */}
        </form>
        </>
    )
}
export default Dummyprac