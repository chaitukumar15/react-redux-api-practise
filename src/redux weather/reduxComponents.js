import { legacy_createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";


let initialState={
    weatherData:{}
}
let reducerFun=(state=initialState,action)=>{
if(action.type==="weatherData"){

    return{
         ...state,
         weatherData:action.payload
    }
}
return state
     
}

let store=legacy_createStore(reducerFun,applyMiddleware(thunk))
export default store;