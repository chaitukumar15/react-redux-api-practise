import React from "react";
import Navv from '../classfolder/navv';
import Appr from '../classfolder/acor';
import Addr from '../classfolder/mapp';
import Footy from '../classfolder/fott';
import Coup from '../classfolder/home';
import { Alert } from "react-bootstrap";

let Hifi=()=>{


    return(
        <>
        <Navv/>
        <Coup/>
        <Appr/>
        <Addr/>
        <Footy/>
        {/* <h1>hi .... welcome user </h1> */}
        </>
    )
}
  

let NoData=()=>{


    return(
        <>
        {/*  */}
        <Alert key={'danger'} variant={'danger'}>
        <h3 style={{color:"red"}}>hi ....unknown user please click register before login </h3>
        </Alert>
        </>
    )
}
export  {Hifi,NoData}