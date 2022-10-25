// import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import { Container } from 'react-bootstrap';
class Appr extends React.Component{
constructor(){
    super();
    this.state={type:"vegan-based",items:"veg-biriyani"}
    // this.heHa=this.heHa.bind(this)
}

heHa=()=>{
    this.setState({items: "palav"});
}

render(){
return (
   
 <div className='b'>
    <Accordion defaultActiveKey="0" >
    <Accordion.Item eventKey="0">
      <Accordion.Header>vegan</Accordion.Header>
      <Accordion.Body>
      <ListGroup>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">SoyaBased
      <Badge bg="primary" pill>
          350
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">plantBasedMeat
      <Badge bg="primary" pill>
          350
        </Badge>
      </ListGroup.Item >
      <ListGroup.Item className="d-flex justify-content-between align-items-start">hh{Appr.heHa}
      <Badge bg="primary" pill>
          350
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">Panner Items<Badge bg="primary" pill>
          350
        </Badge></ListGroup.Item>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">Mushroom Items<Badge bg="primary" pill>
          350
        </Badge></ListGroup.Item>
    </ListGroup>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="0">
      <Accordion.Header>non-vegan</Accordion.Header>
      <Accordion.Body>
      <ListGroup>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">mutton
      <Badge bg="primary" pill>
          350
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">sea foods
      <Badge bg="primary" pill>
          350
        </Badge>
      </ListGroup.Item >
      <ListGroup.Item className="d-flex justify-content-between align-items-start">nonveg Biriyani
      <Badge bg="primary" pill>
          350
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">Panner-Muttor Items<Badge bg="primary" pill>
          350
        </Badge></ListGroup.Item>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">Mushroom-Items<Badge bg="primary" pill>
          350
        </Badge></ListGroup.Item>
    </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>
</div>
)
}
}
export default Appr
