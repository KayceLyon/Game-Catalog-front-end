import {Route, Routes, Navigate, useSearchParams} from 'react-router-dom'
import GameForm from './components/GameForm'

import React, {useState} from 'react'

import Index from './components/Index'
import EditForm from './components/EditForm'
import Navigation from './components/Navigation'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {

  const [apiGames, setApiGames] = useState([])
  const [games, setGames] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    developer: "",
    publisher: "",
    genre: "",
    image: "",
    completed: false,
  })
  const [searchParams, setSearchParams] = useSearchParams({query: ""})
  const [filteredGames, setFilteredGames] = useState([])
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: ""
  })

  return (
    <>
    <Routes>
      <Route path = "/games" element={<Navigation filteredGames = {filteredGames} setFilteredGames = {setFilteredGames} searchParams = {searchParams} setSearchParams = {setSearchParams} games = {games} setGames = {setGames} />}>
        <Route index element={<Index apiGames={apiGames} setApiGames={setApiGames} filteredGames = {filteredGames} setFilteredGames = {setFilteredGames} games = {games} setGames = {setGames}/>} /> 
        <Route path="new" element={<GameForm formData = {formData} setFormData = {setFormData} setGames = {setGames}/>} />
        <Route path="edit/:id" element={<EditForm games = {games} setGames = {setGames}/>} />
      </Route>
      <Route path = "/users" element={<Navigation />} >
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
x      </Route>
      <Route path="/" element={<Navigate to="/games" />} />

    </Routes>
    
    </>    
  ) 
}

export default App