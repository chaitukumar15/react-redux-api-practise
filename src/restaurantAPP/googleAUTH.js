import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { GoogleLogout } from "react-google-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";


let   GoogleAuthLOGIN=()=>{

    let loginn=sessionStorage.getItem("isLoggedIn")
    const [userLoggedIn, setuserLoggedIn] = useState(loginn);

console.log(userLoggedIn);


    let success=(val)=>{
let objdata=val.profileObj;

axios
.get(`http://localhost:3001/profile/${val.profileObj.googleId}`)
.then((response) => {
  console.log(response);
  sessionStorage.setItem("isLoggedIn", "true"); 
}).catch((err)=>{
    if(err.response.status===404){
        axios.post("http://localhost:3001/profile", {objdata})
    }}
    
    )
    sessionStorage.setItem("isLoggedIn", "true")
    window.location.reload();
}


    let failure=(err)=>{
    console.log(err);
    }
    return(
        <>
        <GoogleLogin 
        clientId="646026352346-0cu3opsdi9c86movpkmin8jakro3lb62.apps.googleusercontent.com"
        buttonText="login"
        onSuccess={success}
        onFailure={failure}
        cookiePolicy={'single_host_origin'}/>
       
        </>
    )
}
export { GoogleAuthLOGOUT,GoogleAuthLOGIN}

let GoogleAuthLOGOUT=()=>{
   
    
    let logout=(val)=>{
        sessionStorage.clear();
        window.open("/","_self")
        // window.location.reload();
       
    }
    return(
        <>
        <GoogleLogout
         clientId="646026352346-0cu3opsdi9c86movpkmin8jakro3lb62.apps.googleusercontent.com"
         buttonText="Logout"
      onLogoutSuccess={logout}/>
        </>
    )
}
