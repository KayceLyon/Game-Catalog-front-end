import React from 'react'
import axios from 'axios'
import Navigation from './Navigation'

const EditForm = (params) => {
    const handleChange = (event)=> {
        const {name, value, type, checked} = event.target
        params.setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked: value
        })) 
    }
    
    const handleEdit = (gameData)=> {
        axios 
          .put(
            `http://localhost:3000/games/edit/${gameData._id}`,
            {
                title: params.formData.title,
                developer: params.formData.developer,
                publisher: params.formData.publisher,
                genre: params.formData.genre,
                image: params.formData.image,
            }
          ).then(()=> {
            axios 
              .get('http://localhost:3000/games')
              .then((response)=> {
                params.setGames(response.data)
              })
          })
      }

    return (
        <>
        <Navigation />
        <form className='form-group' onSubmit={handleEdit}>
          <input className="form-control origin" type='text' onChange={handleChange} placeholder="Image URL" defaultValue={params.formData.image} /><br/>
          <input className="form-control origin" type='text' onChange={handleChange} placeholder="Title" defaultValue={params.formData.title}/><br/>
          <input className="form-control origin" type='text' onChange={handleChange} placeholder="Developer(s)" defaultValue={params.formData.developer}/><br/>
          <input className="form-control origin" type='text' onChange={handleChange} placeholder="Genre(s)" defaultValue={params.formData.genre}/><br/>
          <input className="form-control origin" type='text' onChange={handleChange} placeholder="Publisher(s)" defaultValue={params.formData.publisher}/><br/>
          <input type='submit' value="Edit Game" />
        </form>
        </>
    )
}

export default EditForm