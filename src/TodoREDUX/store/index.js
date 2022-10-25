import { legacy_createStore,applyMiddleware } from "redux";
import reducerFun from "../reducer/index"
import thunk from 'redux-thunk'

let store= legacy_createStore(reducerFun,applyMiddleware(thunk));
export default store