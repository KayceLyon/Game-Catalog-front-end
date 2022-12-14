import {Route, Routes, Navigate, useSearchParams} from 'react-router-dom'
import GameForm from './components/GameForm'
import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import './App.css'

import Index from './components/Index'
import EditForm from './components/EditForm'
import Navigation from './components/Navigation'

const App = () => {

  const [searchParams, setSearchParams] = useSearchParams({query: ""})
  const [filteredGames, setFilteredGames] = useState([])
  console.log(filteredGames)
  const [games, setGames] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    developer: "",
    studio: "",
    genre: "",
    image: "",
    completed: false,
  })

  return (
    <>
    <Routes>
      <Route path = "/games" element={<Navigation filteredGames = {filteredGames} setFilteredGames = {setFilteredGames} searchParams = {searchParams} setSearchParams = {setSearchParams} games = {games} setGames = {setGames} />}>
        <Route index element={<Index filteredGames = {filteredGames} setFilteredGames = {setFilteredGames} games = {games} setGames = {setGames}/>} /> 
        <Route path="new" element={<GameForm formData = {formData} setFormData = {setFormData} setGames = {setGames}/>} />
        <Route path="edit/:id" element={<EditForm formData = {formData} setFormData = {setFormData} games = {games} setGames = {setGames}/>} />
      </Route>
      <Route path="*" element={<Navigate to="/games" />} />
    </Routes>
    
    </>    
  ) 
}

export default App