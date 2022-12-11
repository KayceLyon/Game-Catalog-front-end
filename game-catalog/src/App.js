import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


import GameForm from "./components/GameForm"
import Navigation from "./components/Navigation"
import Index from "./components/Index"
import EditForm from "./components/EditForm"
import Cards from './components/Cards'

const App = () => {

  const [games, setGames] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newCreator, setNewCreator] = useState('')
  const [newStudio, setNewStudio] = useState('')
  const [newGenre, setNewGenre] = useState('')
  const [newImage, setNewImage] = useState('')

  const getGamesDB = (e) =>{
    axios
    .get('http://localhost:3000/games')
    .then((response)=>{
      setGames(response.data)
    })
  }
  
  useEffect(()=>{
    getGamesDB()
  }, []);


  return (
    <div className='container'>
        <main className="form-div" id="Game">
          <Navigation />
      </main>
 
        <GameForm 
          newTitle={newTitle} newCreator={newCreator} newImage={newImage} newStudio={newStudio} newGenre={newGenre}  
          setGames={setGames} setNewTitle={setNewTitle} setNewCreator={setNewCreator} setNewStudio={setNewStudio} setNewGenre={setNewGenre} setNewImage={setNewImage}/>
           {games.map((game)=>{ 
            return(
          <Index key={game._id} title={game.title} creator={game.creator} image={game.image} studio={game.studio} genre={game.genre}/> )})} 
          <EditForm />
  </div>
    
  )
}

export default App