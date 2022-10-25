import React from 'react';
// import ReactDOM from 'react-dom/client';
class Chaitu extends React.Component{
    constructor(props){
        super(props)
        this.state={chai:"winninjg"}
    }
    
        
        static getDerivedStateFromProps(props,state){
            return( {chai: props.bb} )
        }
        render(){
           return (
            <h1>india is {this.state.chai}</h1>
           )
        }
}
  export default Chaitu ;   
