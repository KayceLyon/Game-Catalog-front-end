import React, {useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search = (params) => {
    const [searchParams, setSearchParams] = useSearchParams({query: ""})

    let titles = params.games.filter(games => games.title.includes(searchParams.get("query"))).map(filteredGames => (filteredGames.title))
    console.log(titles)
    return (
        <>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={event => setSearchParams({query: event.target.value})}
                />
                <Button variant="outline-success">Search</Button>
          </Form>
        </>
    )
}

export default Search