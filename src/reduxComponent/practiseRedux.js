import React from "react";
import { Button } from "react-bootstrap";
// import store from "./resuxComponents"
import {useSelector,useDispatch} from "react-redux"


let PractiseRedux=()=>{

let selector=useSelector(s=>s.count)
console.log(selector);
let dispatch=useDispatch();

    let increment=()=>{

dispatch({
    type:"increment"
})
    }
    let decrement=()=>{
        dispatch({
            type:"decrement"
        })
    }
    return(
        <>
        <h1>counter</h1>

        <Button onClick={increment}>incremnt</Button>
        <Button onClick={decrement}>decremnt</Button>
        <h2>{selector}</h2>
        </>
    )
}
export default PractiseRedux