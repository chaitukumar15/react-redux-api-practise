
import { legacy_createStore } from "redux";



let initialState={
    listData:[],
    errorMessage:""
}

let reducerFun=(state=initialState,action)=>{
if(action.type==="apidatatwo"){
   
return {
   ...state,
   listData:[...action.payload]
}


}  

if(action.type==="apidatafive"){
   
    return {
       ...state,
       listData:[...action.payload]
    }}

    
return state
}
let store = legacy_createStore(reducerFun) ;


export default store;