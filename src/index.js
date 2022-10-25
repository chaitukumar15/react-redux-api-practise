import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

// import Coup from './classfolder/home';
// import Navv from './classfolder/navv';
// import Appr from './classfolder/acor';
// import Cor from './hel';
// import Addr from './classfolder/mapp';
// import Footy from './classfolder/fott';
// import Chaitu from './dumy';
// import Footr from './fott';
// import Codg from "./imgd.js"
// import Prc from './prce';
// import Mid from './mid';
// import Fot from './footr';
// import Dosa from "./media/food2.png"
// import Iosa from "./media/food3.png"
// import Hosa from "./media/food4.png"
// import Chai from './consitional/count';
// import Temp from './consitional/temp';
// import Formm from './consitional/formm';
// import FormVali from './consitional/form1';
// import Register from './consitional/register';
// import TodoList from './consitional/aaaa.js';
// import Routerr from './rootr';
// import Apii from './consitional/apii';
// import ApCall from './funcom/incremnt';
// import Ince from './funcom/incredecre';
// import Temp from './funcom/temp';
// import FormDta  from './funcom/formm';
// import Apilist from './classfolder/Apilist';
// import ApiCallData from './funcom/ApilistFun';
// import Curd from './funcom/crud';
// import LogIN from './funcom/login';
// import Registration from './funcom/registration';
// import DisplayFun from './funcom/displayFun';
// import Homepage from './mewproj/home';
// import ControlledCom from "./componentcnun/controledcm"
// import Todo from './todo list/todo';
// import TodoServer from "./todo list/tosoServer"
// import ReactLogin from "./goodleauth/gmaillauth"
// import Homepage from "./restaurantAPP/home"
// import Sample from "./mewproj/sample"
// import DisplayPage from './restaurantAPP/display';
// import Dummyprac from './dummy';
// import PractiseRedux from "./reduxComponent/practiseRedux"
// import TodoApp from "./TodoREDUX/"
// import store from "./TodoREDUX/store";
import { Provider } from 'react-redux';
// import store from './reduxComponent/resuxComponents';
// import ApiCall from "./reduxApiCall/apicall"
// import store from './reduxApiCall/reduxComponents';
// import store from './redux weather/reduxComponents';
// import WeatherApp from './redux weather';
import Calculator from './redux calculator';
import store from './redux calculator/reduxComponents';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
    <Calculator/>
  </Provider>
  {/* <Provider store={store}>
  <ApiCall/>
  </Provider> */}
  {/* <Provider store={store}>
  <TodoApp/>

  </Provider> */}
           
{/* <Provider store={store}>
  <WeatherApp/>
</Provider> */}
 
  {/* <Provider store={store}>
  <PractiseRedux/>
  </Provider> */}
  {/* <Dummyprac/> */}
  {/* <Sample/> */}
  {/* <DisplayPage /> */}
  {/* <ReactLogin/> */}
  {/* <TodoServer/> */}
  {/* <Todo/> */}
  {/* <ControlledCom /> */}
  {/* <Homepage/> */}
  {/* <DisplayFun/> */}
  {/* <LogIN/> */}
  {/* <Registration /> */}
  {/* <Curd/> */}
  {/* <ApiCallData/> */}
  {/* <Apilist/> */}

   {/* <Apii/> */}
  {/* <FormDta/> */}
  {/* <Temp/> */}
  {/* <Ince/> */}
  {/* <ApCall/> */}
 
  {/* <Routerr/> */}
  
  {/* <Chai/>
  <Temp/>
  <TodoList/>
  <FormVali/>
  <Formm/> */}
  {/* <Register/> */}
  {/* <Chaitu bb="chaitanya"/> */}
{/* <Navv/>
  <Coup/>
  <Appr/>
  <Addr/>
  <Footy/> */}
{/* <Footr/> */}
 {/* <Cor/>  */}
  
  {/* <Codg f1={Dosa} f2={Iosa} f3={Hosa} /> */}
  {/* <Codg f1={Dosa} f2={Iosa} f3={Hosa} /> */}
  {/* <Mid/> */}
  
  {/* <Prc/> */}
  {/* {/* <Fot/> */}
  
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
