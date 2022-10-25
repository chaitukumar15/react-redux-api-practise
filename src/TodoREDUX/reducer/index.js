let initialState={
 
    TodoList:[]
}

let reducerFun=(state=initialState,action)=>{

    if(action.type==="AddItems"){
        return{
            ...state,
             TodoList:[...action.payload]
        }
    }
    else if(action.type==="DeleteList"){
        return{
            ...state,
            TodoList:[...action.payload]
        }
    }
    else if(action.type==="clear"){
        return{
            ...state,
            TodoList:[]
        }
    }
    else if(action.type==="update"){

        return{
            ...state,
            TodoList:[...action.payload]
        }
    }
return state
}
export default reducerFun
