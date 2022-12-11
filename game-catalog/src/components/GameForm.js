import React from 'react'
import axios from 'axios'


const GameForm = (props) => {
  const handleNewTitle = (game) => {
    props.setNewTitle(game.target.value)
  }

  const handleNewCreator = (game) => {
    props.setNewCreator(game.target.value)
  }

  const handleNewStudio = (game) => {
    props.setNewStudio(game.target.value)
  }

  const handleNewGenre = (game) => {
    props.setNewGenre(game.target.value)
  }

  const handleNewImage = (game) => {
    props.setNewImage(game.target.value)
  }
  
  const handleNewGame = (g) => {
    g.preventDefault()
    axios.post(
      'http://localhost:3000/games',
      {
        title:props.newTitle,
        creator:props.newCreator,
        studio:props.newStudio,
        genre:props.newGenre,
        image:props.newImage,
      }).then(()=>{
        axios
        .get('http://localhost:3000/games')
        .then((response)=>{
          props.setGames(response.data)
        })
      })
  g.target.reset()
}


    return (
        <form className='form-group' onSubmit={handleNewGame}>
          <input class="form-control origin" type='text' name='image' onChange={handleNewImage} placeholder="Image URL" /><br/>
          <input class="form-control origin" type='text' name='title' onChange={handleNewTitle} placeholder="Title of Game"/><br/>
          <input class="form-control origin" type='text' name='creator' onChange={handleNewCreator} placeholder="Game Creator"/><br/>
          <input class="form-control origin" type='text' name='genre' onChange={handleNewGenre} placeholder="Game Genre"/><br/>
          <input class="form-control origin" type='text' name='studio' onChange={handleNewStudio} placeholder="Design Studios"/><br/>
          <input type='submit' value="Add Game" />
        </form>
    )
}

export default GameForm;