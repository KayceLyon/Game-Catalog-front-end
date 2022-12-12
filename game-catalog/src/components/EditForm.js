import React from 'react'
import axios from 'axios'

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
            `http://localhost:3000/games/${gameData._id}`,
            {
                title: params.formData.title,
                creator: params.formData.creator,
                studio: params.formData.studio,
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
        <form className='form-group' onSubmit={handleEdit}>
          <input class="form-control origin" type='text' onChange={handleChange} placeholder="Image URL" /><br/>
          <input class="form-control origin" type='text' onChange={handleChange} placeholder="Name of Game"/><br/>
          <input class="form-control origin" type='text' onChange={handleChange} placeholder="Creator of Game"/><br/>
          <input class="form-control origin" type='text' onChange={handleChange} placeholder="Game/Series Title"/><br/>
          <input class="form-control origin" type='text' onChange={handleChange} placeholder="Design Studios"/><br/>
          <input type='submit' value="Edit Game" />
        </form>
        </>
    )
}

export default EditForm