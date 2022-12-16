import React from 'react'
import Card from 'react-bootstrap/Card'

const Cards = (props) => {

  return (
    <Card className="game-cards create-game-cards" key={props._id}>
                <Card.Img src={props.image} className="create-card-img" alt="Card image" />
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text> 
                                Genre: {props.genre}<br/> 
                                Developers: {props.developer}<br/> 
                                Publishers: {props.publisher} 
                    </Card.Text>

    </Card>
)}
export default Cards;