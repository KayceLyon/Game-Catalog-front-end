import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [games, setGames] = useState([])

  const [newTitle, setNewTitle] = useState('')
  const [newCreator, setNewCreator] = useState('')
  const [newStudio, setNewStudio] = useState('')
  const [newGenre, setNewGenre] = useState('')
  const [newImage, setNewImage] = useState('')

  const handleNewTitle = (game) => {
    setNewTitle(game.target.value)
  }

  const handleNewCreator = (game) => {
    setNewCreator(game.target.value)
  }

  const handleNewStudio = (game) => {
    setNewStudio(game.target.value)
  }

  const handleNewGenre = (game) => {
    setNewGenre(game.target.value)
  }

  const handleNewImage = (game) => {
    setNewImage(game.target.value)
  }

  const handleNewGame = (game) => {
    axios.post(
      'http://localhost:3000/games',
      {
        title: newTitle,
        creator: newCreator,
        studio: newStudio,
        genre: newGenre,
        image: newImage,
      }.then(()=>{
        axios
        .get('http://localhost:3000/games')
        .then((response)=>{
          setGames(response.data)
        })
      })
    )
  }
  useEffect(()=>{
    axios
      .get('http://localhost:3000/games')
      .then((response)=>{
        setGames(response.data)
      })
  }, []);


  return (
    
          <main className="container form-div" id="Game">
        <h1>Insert Game Information!</h1>
      <form className='form-group' onSubmit={handleNewGame}>
          <input class="form-control origin" type='text' onChange={handleNewImage} placeholder="Image URL" /><br/>
          <input class="form-control origin" type='text' onChange={handleNewTitle} placeholder="Name of Game"/><br/>
          <input class="form-control origin" type='text' onChange={handleNewCreator} placeholder="Creator of Game"/><br/>
          <input class="form-control origin" type='text' onChange={handleNewGenre} placeholder="Game/Series Title"/><br/>
          <input class="form-control origin" type='text' onChange={handleNewStudio} placeholder="Design Studios"/><br/>
          <input type='submit' value="Add Game" />
        </form>
      </main>
    
  )
}

export default App