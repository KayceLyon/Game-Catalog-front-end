import React from 'react'
import Cards from './Cards'

const Games = (props) => {
 
    return (
        <>
            <Cards 
            key={props._id} 
            title={props.title} 
            creator={props.creator} 
            image={props.image} 
            studio={props.studio} 
            genre={props.genre} 
            game={props.game}
            />

        </>
    )
}

export default Games