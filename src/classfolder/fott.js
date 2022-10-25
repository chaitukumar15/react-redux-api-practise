import React from 'react';


import "./ind.css"

class Footy extends React.Component{
    constructor(){
        super();
        this.state={place:"Anantapuram"}
    }
    render(){
        return (
            <div className="c">
             <footer style={{color:"white"} }>
            <h3>address</h3>
            <p>{this.state.place} </p>
                  <p> PIN: 515001</p>
               <p>@C:www.cheyFOOD.COM</p>
                 
             </footer>
            </div> 
        )
    }
}
export default Footy