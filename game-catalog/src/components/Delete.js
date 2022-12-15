import React from 'react'
import axios from 'axios'

const Delete = (params) => {

const handleDelete = (gameData)=> {
    axios 
      .delete(`https://game2play-backend.herokuapp.com/games/${gameData._id}`)
      .then(()=> {
        axios 
          .get('https://game2play-backend.herokuapp.com/games')
          .then((response)=> {
            params.setGames(response.data)
          })
      })
  }

  return (
    <button onClick={()=> {
        {handleDelete(params.game)}}}>
            Delete                        
    </button>  )

}

export default Delete
