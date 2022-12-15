import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'

import Games from './Games'

const Index = (params) => {
//   const axiosRequest = [ 
//     'http://localhost:3000/games',
//     'https://api.rawg.io/api/platforms?key=7cb5d75256734799809d62c8e0796218'
//   ]
 
//  const getAllGames = () => { 
//   Promise.all(axiosRequest.map(()))
//  }
  const getGamesDB = () =>{
    axios.get('http://localhost:3000/games')
    .then((response)=>{
      params.setGames(response.data);
      params.setFilteredGames((response.data))
    })
  }

  useEffect(()=>{
    getGamesDB();
    // getAllGames()
  }, []);

  return (
    <div className='container'>
        <main id="Index" className='index-section'>
            <Row xs={1} md={4} className="g-4">
                {params.filteredGames.map((game)=>{ 
                    return(
                        <Col>
                            <Games 
                            game ={params.filteredGames} 
                            key={game._id} 
                            title={game.title} 
                            developer={game.developer} 
                            image={game.image} 
                            publisher={game.publisher} 
                            genre={game.genre}/>                         
                          </Col>  )})} 
            </Row>
        </main>
    </div>
  ) 
}

export default Index