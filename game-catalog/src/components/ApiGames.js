import React from 'react'
import ApiGamesCard from './ApiGamesCard'

const ApiGames = (props) => {
 
    return (
        <>
            <ApiGamesCard 
            key={props._id} 
            short_screenshots={props.short_screenshots}
            name={props.name}
            genres={props.genres} 
            released={props.released}
            rating={props.rating}
            />
        </>
    )
}

export default ApiGames