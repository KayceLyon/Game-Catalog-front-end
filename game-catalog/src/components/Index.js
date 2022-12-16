import React, {useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'

import Games from './Games'
import ApiGames from './ApiGames'

const Index = (params) => {
  const axiosRequest = [ 
    'https://game2play-backend.herokuapp.com/games',
    'https://api.rawg.io/api/games?key=7cb5d75256734799809d62c8e0796218&dates=2019-09-01,2019-09-30&platforms=18,1,7'
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

  useEffect(()=>{
  getAllGames()
  }, []);

  return (
    <Container className='container' fluid>
        <main id="Index">
          <h1>Inserted Games</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
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
        <Row xs={1} md={2} lg={3} className="g-4">
        {params.apiGames.map((game) => {
                  return(
                    <Col key={game.id}>
                      <ApiGames
                      key={game.id}
                      short_screenshots={game.short_screenshots}
                      name={game.name}
                      genres={game.genres[0].name} 
                      released={game.released}
                      rating={game.rating}
                      />
                  </Col>
                )})}
            </Row>
</main>
    </Container>
  ) 
}

export default Index

