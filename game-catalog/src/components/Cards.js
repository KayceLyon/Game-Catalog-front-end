import React from 'react'
import Card from 'react-bootstrap/Card'
import Delete from './Delete'

const Cards = (props) => {

  return (
     <Card className="bg-dark text-white game-cards" key={props._id}>
                <Card.Img src={props.image} className="card-img" alt="Card image" />
                {/* <Card.ImgOverlay> */}
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text> 
                                {props.genre} 
                                {props.developer} 
                                {props.publisher} </Card.Text>
            {/* </Card.ImgOverlay> */}
            <Delete game={props.game}/>
    </Card>
)}
export default Cards;