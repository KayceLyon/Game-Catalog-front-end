import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'

import Games from './Games'

const Index = (params) => {
  
  const getGamesDB = (e) =>{
    axios
    .get('http://localhost:3000/games')
    .then((response)=>{
      params.setGames(response.data)
    })
  }
  
  useEffect(()=>{
    getGamesDB()
  }, []);


  return (
    <div className='container'>
        <main id="Index" className='index-section'>
            <Row xs={1} md={4} className="g-4">
                {params.games.map((game)=>{ 
                    return(
                        <Col>
                            <Games game ={params.game} key={game._id} title={game.title} creator={game.creator} image={game.image} studio={game.studio} genre={game.genre}/> 
                        </Col>  )})} 
            </Row>
        </main>
    </div>
    
  ) 
}

export default Index