import React, {useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams({query: ""})
    console.log(searchParams.get("query"))

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