import React from 'react'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

const ApiGameCard = (props) => {
  return (
     <Card className="game-cards" key={props._id}>
                   <Carousel>
                   <Carousel.Item >
                    <Card.Img key={props.short_screenshots.id} src={props.short_screenshots.image}  className="card-img" alt="Card image" />
                    </Carousel.Item>
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