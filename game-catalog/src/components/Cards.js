import React from 'react'
import Card from 'react-bootstrap/Card'

const Cards = (props) => {

  return (
     <Card className="bg-dark text-white game-cards" key={props._id}>
                <Card.Img src={props.image} className="card-img" alt="Card image" />
                    <Card.Title className="card-title">{props.title}</Card.Title>
                    <Card.Text> Genre: {props.genre}</Card.Text>
                    <Card.Text> Developer: {props.developer} </Card.Text>
                    <Card.Text> Publisher: {props.publisher} </Card.Text>
    </Card>
)}

export default Cards;