import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search = (params) => {

    let query = params.searchParams.get("query").split(' ').join('-').toLowerCase()

    const filteredGames = (unfilteredGames, query) => {
        return (unfilteredGames.filter(games => games.title.toLowerCase().includes(query.toLowerCase()))).map(filteredGames => (filteredGames))
    }

    const filterGamesDB = (e) =>{
        axios
        .get('https://game2play-backend.herokuapp.com/games')
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