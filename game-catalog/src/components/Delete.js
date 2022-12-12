import React from 'react'
import axios from 'axios'

const Delete = (params) => {

const handleDelete = (gameData)=> {
    axios 
      .delete(`http://localhost:3000/games/${gameData._id}`)
      .then(()=> {
        axios 
          .get('http://localhost:3000/games')
          .then((response)=> {
            params.setGames(response.data)
          })
      })
  }

  return (
    <button onClick={()=> {
        handleDelete(params.game)}}>
            Delete                        
    </button>  )

}

export default Delete