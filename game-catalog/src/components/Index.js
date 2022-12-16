import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'

import Games from './Games'
import ApiGames from './ApiGames'

const Index = (params) => {
  const axiosRequest = [ 
    'http://localhost:3000/games',
    'https://api.rawg.io/api/games?key=7cb5d75256734799809d62c8e0796218&dates=2019-09-01,2019-09-30&platforms=18,1,7'
    // 'https://api.rawg.io/api/platforms?key=7cb5d75256734799809d62c8e0796218'
  ]
 
 const getAllGames = () => { 
  Promise.all(axiosRequest.map((axiosRequest)=> axios.get(axiosRequest))).then(
  axios.spread((...allData) => {
    params.setGames(allData[0].data);
    params.setFilteredGames((allData[0].data));
    params.setApiGames(allData[1].data.results)
  })
  )
 }
  const getGamesDB = () =>{
    axios.get('http://localhost:3000/games')
    .then((response)=>{
      params.setGames(response.data);
      params.setFilteredGames((response.data))
    })
  }

  useEffect(()=>{
    // getGamesDB();
    getAllGames()
  }, []);

  return (
    <div className='container'>
        <main id="Index" className='index-section'>
          <h1>Inserted Games</h1>
            <Row xs={1} md={4} className="g-4">
                {params.filteredGames.map((game)=>{ 
                    return(
                        <Col key={game._id}>
                             <Games 
                            game ={params.filteredGames} 
                            title={game.title} 
                            developer={game.developer} 
                            image={game.image} 
                            publisher={game.publisher} 
                            genre={game.genre}
                            />                         
                          </Col>  )})} 
               
            </Row>
        </main>
        <main>
          <h1>Third Party API Games</h1>
        <Row xs={1} md={4} className="g-4">
        {params.apiGames.map((game) => {
                    for(let i=0; i < game.short_screenshots.length; i++){
                      
                    console.log(game.short_screenshots[i]);
                  return(
                    <Col key={game.id}>
                      <ApiGames 
                      short_screenshots={game.short_screenshots[i]}
                      name={game.name}
                      genres={game.genres[0].name} 
                      released={game.released}
                      rating={game.rating}
                      />
                  </Col>

                    
                  )}})}
            </Row>
</main>
    </div>
  ) 
}

export default Index