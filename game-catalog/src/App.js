import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


import GameForm from "./components/GameForm"
import Navigation from "./components/Navigation"
import Index from "./components/Index"

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
        <Navigation />
        <h1>Insert Game Information!</h1>
        <GameForm handleNewGame = {handleNewGame} handleNewTitle = {handleNewTitle} handleNewCreator = {newCreator} handleNewGenre = {handleNewCreator} handleNewImage = {handleNewImage} handleNewStudio = {handleNewStudio}></GameForm>
        <Index />
      </main>
    
  )
}

export default App