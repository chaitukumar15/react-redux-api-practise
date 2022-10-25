import axios from "axios";
import React from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import {useDispatch,useSelector} from "react-redux"
let WeatherApp =()=>{


   let dispatch= useDispatch();
   let selector= useSelector(state=>state.weatherData)   
console.log(selector);
    let [InputChange,setInputChange]=useState("");

let HandleChange=(e)=>{

setInputChange(e.target.value)

}
console.log(InputChange);

let HandleButton=(e)=>{
    alert("hello")
e.preventDefault();
let apiKey="bf89bc2cde67abeceea98d4c23a10716";
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${InputChange}&appid=${apiKey}`)
.then(val=>
    dispatch(
        {
            type:"weatherData",
            payload:val.data
        }
    )
    
)

setInputChange("")
}

    return(
        <>
        <h1>weather app</h1>
        <form>
        <input placeholder="enter city"  onChange={HandleChange} value={InputChange}/>
        <button onClick={HandleButton}>get details</button> 
        </form>
        
           
        {   Object.keys(selector).length !== 0 ? 



<Table    variant="light"> 
         <tr>
          <th>CityName</th>
          <td>{selector.name}</td>
          
        </tr>
        <tr>
          <th>temperature</th>
          <td>{(selector.main.temp-273.15).toFixed(2)}&#8451; </td>
          
        </tr>
        <tr>
          <th>humidity</th>
          <td>{selector.main.humidity}</td>
          
        </tr>
        <tr>
          <th>weather</th>
          <td>{selector.weather[0].main}</td>
          
        </tr>
</Table>

:
(null)
} 
        </>
    )
}

export default WeatherApp;