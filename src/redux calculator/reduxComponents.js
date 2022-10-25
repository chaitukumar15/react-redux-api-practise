
import { legacy_createStore } from "redux";


let initialState={
    cal:""
}
let reducerFun=(state=initialState,action)=>{
if(action.type==="calculate"){
    let calculation=eval(action.payload)
    console.log(action.payload);
    console.log(typeof(action.payload));
return{
    ...state,
    cal:calculation
}
}
return state
}

let store= legacy_createStore(reducerFun);
export default store;