import React from 'react'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import CardImg from 'react-bootstrap/esm/CardImg'

const ApiGameCard = (props) => {

  return (
     <Card className="game-cards" key={props.id}>
                           <Carousel interval={5000}>
                    
                    {props.short_screenshots.map((image) =>{
                        return(
                   <Carousel.Item key={image.id}>
                <CardImg src={image.image}  className="card-img" alt="Card image" />
                </Carousel.Item>
                        )
                })}
                </Carousel>
                {/* <Card.ImgOverlay> */}
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text> 
                            Genre: {props.genres}<br/> 
                            Release Date: {props.released}<br/>
                            Rating: {props.rating}
                                </Card.Text>
            {/* </Card.ImgOverlay> */}
    </Card>
    
    )}

export default ApiGameCard;