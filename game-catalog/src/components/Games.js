import React from 'react'
import Cards from './Cards'

const Games = (props) => {
 
    return (
        <>
            <Cards 
            key={props._id} 
            title={props.title} 
            developer={props.creator} 
            image={props.image} 
            publisher={props.studio} 
            genre={props.genre} 
            game={props.game}
            />

        </>
    )
}

export default Games