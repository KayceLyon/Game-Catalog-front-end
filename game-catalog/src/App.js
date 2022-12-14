import {Route, Routes, Navigate} from 'react-router-dom'
import GameForm from './components/GameForm'
import React, {useState} from 'react'

import Index from './components/Index'
import EditForm from './components/EditForm'
import Games from './components/Games'

const App = () => {

  const [games, setGames] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    developer: "",
    publisher: "",
    genre: "",
    image: "",
    completed: false,
  })

  return (
    <>
    <Routes>
      <Route path="/*" element={<Navigate to="/games" />} />
      <Route path="/games" element={<Index games = {games} setGames = {setGames}/>} /> 
      <Route path="/games/new" element={<GameForm formData = {formData} setFormData = {setFormData} setGames = {setGames}/>} />
      <Route path="/games/edit/:id" element={<EditForm  games = {games} setGames = {setGames}/>} />
      <Route path="/games" element={<Games games = {games}/>} />
    </Routes>
    
    </>    
  ) 
}

export default App