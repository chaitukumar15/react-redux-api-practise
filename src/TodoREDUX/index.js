    import axios from "axios";
import React from "react";
import { useState } from "react";
import {useDispatch,useSelector} from "react-redux"


    let TodoApp=()=>{

        let [ValueTodo,setValueTodo]=useState("")
        let [updateValueTodo,setUpdate]=useState("")
let dispatch =useDispatch();
let selector=useSelector(state=>state)
console.log(selector);

let objData={
     
    name:ValueTodo

    }
 let HandleChange=(e)=>{
    
    setValueTodo(e.target.value)
 }

 let HandleClick=(e)=>{
   if(ValueTodo !== ""){
    axios.post("http://localhost:3001/profile",objData)
    .then(val=>console.log(val.data))

   }
    e.preventDefault();
    
axios.get("http://localhost:3001/profile")
    .then(val=>
       
    dispatch(
        {
            type:"AddItems",
            payload:val.data
            
        }))
setValueTodo("")
}

let HandleDelete=(id)=>{

    axios.delete(`http://localhost:3001/profile/${id}`)
    

    axios.get("http://localhost:3001/profile")
    .then(

        val=>
        dispatch(
            {
                type:"DeleteList",
                payload:val.data
            }
        )
    )
        
}


let HandleClear=()=>{

    dispatch(
        {
            type:"clear"
        }
    )
}

let HandleEdit=(id)=>{
console.log(id);
let InputType=document.getElementsByClassName("input");
let buttonFun=document.getElementsByClassName("buttonFun");
if(id <= 300 ){
    InputType[id].style.visibility="visible";
    buttonFun[id].style.visibility="visible";
}

}
let HandleEditChange =(e)=>{
    setUpdate(e.target.value)
}

let HandleUpdate=(index,id)=>{

    
    // let updateValue={
    //     name:updateValueTodo
    // }

axios.patch(`http://localhost:3001/profile/${id}`,{name:updateValueTodo})
.then(val=>
    console.log(val))
    axios.get("http://localhost:3001/profile")
    .then(
        val=>
 dispatch(
        {
            type:"update",
            payload:val.data
        }

    ))


    let InputType=document.getElementsByClassName("input");
    let buttonFun=document.getElementsByClassName("buttonFun");
    if(index<=300){
        InputType[index].style.visibility="hidden";
        buttonFun[index].style.visibility="hidden";
    
    }
   
}

let listDataFetch= selector.TodoList;

let listDisplay= listDataFetch.map(
    (val,index)=>(
        <li key={val.id}>
    {val.name}
    <button onClick={()=>HandleDelete(val.id)}>delete</button>
    <button onClick={()=>HandleEdit(index)}>edit</button>
    <input  style={{visibility:"hidden"}}  className="input" placeholder="update list" onChange={HandleEditChange}/>
    <button style={{visibility:"hidden"}}  className="buttonFun" onClick={()=>HandleUpdate(index,val.id)}>update</button>
        </li>
    )
)
        return(
            <>
            <h1>todoApp</h1>

             <form>
          <input placeholder="enter todo items" onChange={HandleChange} value={ValueTodo} />
          <button onClick={HandleClick}>add todo items</button>
          <button onClick={HandleClear}>clear all</button>

             </form>
             {listDisplay}
            </>
        )
    }

    export  default TodoApp;