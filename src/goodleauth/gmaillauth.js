import React from "react";
import {GoogleLogin} from "react-google-login";
import { gapi } from "gapi-script"


let ReactLogin=()=>{

let a = "bkj";
function ah(){
    let a="bjghj"
    console.log(a);
    return a
   }
ah();
console.log(ah());
    let Success=(res)=>{
console.log(res);
    }
    
    let Failure=(err)=>{
        console.log(err);
            }
    return(
        <div>
        <GoogleLogin 
        clientId="205277251400-8a0jglg017bku5ed4nr93f3do7ksajas.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={Success}
        onFailure={Failure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}/>
        </div>
    )
}
export default ReactLogin