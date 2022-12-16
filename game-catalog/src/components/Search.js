import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search = (params) => {

    const filteredGames = (unfilteredGames, query) => {
        return (unfilteredGames.filter(games => games.title.toLowerCase().includes(query.toLowerCase()))).map(filteredGames => (filteredGames))
    }

    const axiosRequest = [ 
      'https://game2play-backend.herokuapp.com/games',
      'https://api.rawg.io/api/games?key=7cb5d75256734799809d62c8e0796218&dates=2019-09-01,2019-09-30&platforms=18,1,7'
    ]

    const filterGamesDB = (e) =>{
        axios
        .get(axiosRequest)
        .then((response)=>{
          params.setFilteredGames(filteredGames(response.data, params.searchParams.get("query")))
          
        })
      }

    return (
        <>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search by Title"
                className="me-2"
                aria-label="Search"
                onChange={(event) => params.setSearchParams({query: event.target.value})}
                onClick={(event) => params.setFilteredGames(params.games)}
                />
                <Button onClick={filterGamesDB} variant="outline-dark">Search</Button>
          </Form>
        </>
    )
}

export default Search