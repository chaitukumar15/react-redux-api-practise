import React from "react";
import "./App.css"
import Carousel from 'react-bootstrap/Carousel';
// import Dosa from "./media/food2.png"
// import Iosa from "./media/food3.png"
// import Hosa from "./media/food4.png"
function Codg(props){
  return(
<Carousel>
  <Carousel.Item>
<img src={props.f1} 
width="1490"
height="600"/>
 
  <Carousel.Caption>

<h2 style={{color:"white"}}>dosa is an ammazing food</h2>
<p>lets try once</p>
  </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
<img src={props.f2} 
width="1490"
height="600"/>
  
  <Carousel.Caption>
<h2 style={{color:"white"}}>tali is an ammazing food</h2>
<p>lets try once</p>
  </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
<img src={props.f3} 
width="1490"
height="600"/>
  
  <Carousel.Caption>
<h2 style={{color:"white"}}>tali is an ammazing food</h2>
<p>lets try once</p>
  </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  )
}

export default Codg;