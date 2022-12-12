import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import GameForm from "./components/GameForm"
import Navigation from "./components/Navigation"
import Index from "./components/Index"
import EditForm from "./components/EditForm"
import Delete from "./components/Delete"

// import Cards from './components/Cards'

const App = () => {

  const [games, setGames] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    developer: "",
    studio: "",
    genre: "",
    image: "",
    completed: false,
  })

  // const [newTitle, setNewTitle] = useState('')
  // const [newCreator, setNewCreator] = useState('')
  // const [newStudio, setNewStudio] = useState('')
  // const [newGenre, setNewGenre] = useState('')
  // const [newImage, setNewImage] = useState('')

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
      <section >
      <main id="Create" className='create-section'>
        <GameForm formData = {formData} setFormData = {setFormData} setGames = {setGames}/>
        </main>
        </section>
        <main id="Index" className='index-section'>
    <Row xs={1} md={4} className="g-4">
            {games.map((game)=>{ 
              return(
            <Col>
            <Index game = {game} key={game._id} title={game.title} creator={game.creator} image={game.image} studio={game.studio} genre={game.genre}/> 
              </Col>  )})} 
      </Row>
         </main>
        <main id="Edit" className='edit-section' >
            <EditForm formData = {formData} setFormData = {setFormData} games = {games} setGames = {setGames} />
        </main>
  </div>
    
  ) 
}

export default App