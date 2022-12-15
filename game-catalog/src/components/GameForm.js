import React from 'react'
import axios from 'axios'

const GameForm = (props) => {

    const handleChange = (event)=> {
        const {name, value, type, checked} = event.target
        props.setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked: value
        })) 
    }
  
  const handleNewGame = (g) => {
    g.preventDefault()
    axios.post(
      'https://game2play-backend.herokuapp.com/games',
      {
        title: props.formData.title,
        developer: props.formData.developer,
        publisher: props.formData.publisher,
        genre: props.formData.genre,
        image: props.formData.image,
      }).then(()=>{
        axios
        .get('https://game2play-backend.herokuapp.com/games')
        .then((response)=>{
          props.setGames(response.data)
        })
      })
}


    return (
      <div>
      <h1>Insert Game Information!</h1>
        <form className='form-group' onSubmit={handleNewGame}>
          <input className="form-control origin" type='text' name='image' onChange={handleChange} placeholder="Image URL" value={props.formData.image} /><br/>
          <input className="form-control origin" type='text' name='title' onChange={handleChange} placeholder="Title" value={props.formData.title}/><br/>
          <input className="form-control origin" type='text' name='developer' onChange={handleChange} placeholder="Developer(s)" value={props.formData.developer}/><br/>
          <input className="form-control origin" type='text' name='genre' onChange={handleChange} placeholder="Genre(s)" value={props.formData.genre}/><br/>
          <input className="form-control origin" type='text' name='publisher' onChange={handleChange} placeholder="Publisher(s)" value={props.formData.publisher}/><br/>
          <button><input type='submit' value="Add Game" /></button>
        </form>
      </div>
    )
}

export default GameForm;