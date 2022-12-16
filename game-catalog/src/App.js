import React, {useState} from 'react'
import {Route, Routes, Navigate, useSearchParams} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import GameForm from './components/GameForm'
import Index from './components/Index'
import EditForm from './components/EditForm'
import Navigation from './components/Navigation'
// import LoginButton from './components/LoginButton'
// import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

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
  const [searchParams, setSearchParams] = useSearchParams({query: ""})
  const [filteredGames, setFilteredGames] = useState([])
  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <>
    <Routes>
      <Route path = "/games" element={<Navigation user = {user} isAuthenticated = {isAuthenticated} filteredGames = {filteredGames} setFilteredGames = {setFilteredGames} searchParams = {searchParams} setSearchParams = {setSearchParams} games = {games} setGames = {setGames} > </Navigation>}>
        <Route index element={<Index filteredGames = {filteredGames} setFilteredGames = {setFilteredGames} games = {games} setGames = {setGames}/>} /> 
        <Route path="new" element={<GameForm formData = {formData} setFormData = {setFormData} setGames = {setGames}/>} />
        <Route path="edit/:id" element={<EditForm formData = {formData} setFormData = {setFormData} games = {games} setGames = {setGames}/>} />
        <Route path= "/profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<Navigate to="/games" />} />

    </Routes>
    
    </>    
  ) 
}

export default App