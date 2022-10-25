import React from "react";
import "./App.css"
import Carousel from 'react-bootstrap/Carousel';
import Dosa from "./media/food2.png"
import Iosa from "./media/food3.png"
import Hosa from "./media/food4.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Prc(){
    return (
    <div className="d"><div>
<Card style={{ width: '18rem' }} >
<Card.Img variant="top" src={Dosa} alt="food1"/>
<Card.Body>
        <Card.Title>dosa</Card.Title>
        <Card.Text>
        The masala dosa finds its origins in the Tuluva
         Mangalorean cuisine of Karnataka. This dish combines a regular 
        dosa with a lightly spiced potato filling that
         is cooked with green chillies and the South 
         Indian star- curry leaves.
        </Card.Text>
        <Button variant="primary">find dosa`s</Button>
      </Card.Body>

</Card>
</div>

<div>
<Card style={{ width: '18rem' }} >
<Card.Img variant="top" src={Iosa} alt="food1"/>
<Card.Body>
        <Card.Title>iosa</Card.Title>
        <Card.Text>
        The masala dosa finds its origins in the Tuluva
         Mangalorean cuisine of Karnataka. This dish combines a regular 
        dosa with a lightly spiced potato filling that
         is cooked with green chillies and the South 
         Indian star- curry leaves.
        </Card.Text>
        <Button variant="primary">find dosa`s</Button>
      </Card.Body>

</Card>
</div>
<div>
<Card style={{ width: '18rem' }} >
<Card.Img variant="top" src={Hosa} alt="food1"/>
<Card.Body>
        <Card.Title>Hosa</Card.Title>
        <Card.Text>
        The masala dosa finds its origins in the Tuluva
         Mangalorean cuisine of Karnataka. This dish combines a regular 
        dosa with a lightly spiced potato filling that
         is cooked with green chillies and the South 
         Indian star- curry leaves.
        </Card.Text>
        <Button variant="primary">find dosa`s</Button>
      </Card.Body>

</Card>
</div>
</div>


    )
}
export default Prc;