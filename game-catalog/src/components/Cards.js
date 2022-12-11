import React from 'react'
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
   
  return (
     <Card  style={{ width: '15rem' }} className="bg-dark text-white" key={props._id}>
                <Card.Img src={props.image}alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text> 
                                {props.genre} 
                                {props.creator} 
                                {props.studios} </Card.Text>
            </Card.ImgOverlay>
    </Card>

)}
    
     {/* IF WE DO NOT USE INDEX.JS WE PUT THIS MAP FUNCTION IN APP.JS 
      {games.map((game)=>{ 
        return(
        <Cards key={game._id} title={game.title} creator={game.creator} image={game.image} studio={game.studio} genre={game.genre}/>
        )
      })} */}

export default Cards;