
import { legacy_createStore } from "redux";

// creating reducer function 
let reducerFun=(state={count:0},action)=>{

    if(action.type === "decrement"){
    let countReturn = {count : state.count-1};
    return countReturn
    }
else if(action.type === "increment"){
        let countReturn = {count : state.count+1};
        return countReturn
        }

return (state)
}


// creating store and passing reducer fun as parameter to store 
let store = legacy_createStore(reducerFun)
export default store