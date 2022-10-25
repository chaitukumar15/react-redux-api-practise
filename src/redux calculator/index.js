import React from "react";
import "./index.css"
import {useDispatch,useSelector} from "react-redux"
import { useState } from "react";


let Calculator=()=>{
    let [InputValue,setInputValue]=useState("")

let dispatch=useDispatch();
let selector= useSelector(state=>state.cal);
console.log(selector);

  let CalculateData=(e)=>{
    let data=
    console.log(data);
   
    console.log(e.target.value);
  }  

let show=(valueData)=>{
// setInputValue()
    let data =document.getElementById("input").value+=valueData;
    console.log(data);
    setInputValue(data)

}
let calculation =()=>{
dispatch({
    type:"calculate",
    payload:InputValue
}

)
document.getElementById("input").value=selector;
}

let ac=()=>{
    document.getElementById("input").value="";
}
return(
        <>
        <h1>Calculator</h1>
        <input type="text" id="input"  onChange={CalculateData}/>
        <button onClick={ac}>ac</button>
        <div className="Calculator">
           
           <button onClick={()=>show("1")}>1</button>
            <button onClick={()=>show("2")}>2</button>
            <button onClick={()=>show("3")}>3</button>
            <button onClick={()=>show("4")}>4</button>
            <button onClick={()=>show("5")}>5</button>
            <button onClick={()=>show("6")}>6</button>
            <button onClick={()=>show("7")}>7</button>
            <button onClick={()=>show("8")}>8</button>
            <button onClick={()=>show("9")}>9</button>
            <button onClick={()=>show("0")}>0</button>
            <button onClick={()=>show("+")}>+</button>
            <button onClick={()=>show("-")}>-</button>
            <button onClick={()=>show("*")}>*</button>
            <button onClick={()=>show("/")}>/</button>
            <button onClick={()=>show("%")}>%</button>
            <button onClick={calculation}>=</button>
    
            
        </div>
        </>
    )
}
export default Calculator;