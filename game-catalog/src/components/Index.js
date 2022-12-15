import React, {useEffect} from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'

import Games from './Games'

const Index = (params) => {
  
  const getGamesDB = (e) =>{
    axios
    .get('https://game2play-backend.herokuapp.com/games')
    .then((response)=>{
      params.setGames(response.data)
      params.setFilteredGames((response.data))
    })
  }
  
  useEffect(()=>{
    getGamesDB()
  }, []);

  return (
    <div className='container'>
        <main id="Index" className='index-section'>
            <Row xs={1} md={4} className="g-4">
                {params.filteredGames.map((game)=>{ 
                    return(
                        <Col>
                            <Games game ={params.filteredGames} key={game._id} title={game.title} developer={game.developer} image={game.image} publisher={game.publisher} genre={game.genre}/>                         </Col>  )})} 
            </Row>
        </main>
    </div>
    
  ) 
}

export default Index

