// import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Dosa from "../media/food2.png"
import Iosa from "../media/food3.png"

// import { Container } from 'react-bootstrap';
// import ReactDOM from 'react-dom/client';

class Coup extends React.Component{
    constructor(){
        super();
        this.state={cha:"kill"}
    }
    render(){
        return (
     
    <Carousel>
        <Carousel.Item>
            <img src={Dosa} alt="dosa" width="1495" height="500"/>
       
        <Carousel.Caption>
          <h3>dosa</h3>
          <p>amazing Dosa.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={Iosa} alt="dosa" width="1495" height="500"/>
       
        <Carousel.Caption>
          <h3>tali</h3>
          <p>amazing  gusagusalu.</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
       
        )
    }
}
export default Coup
