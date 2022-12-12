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
      'http://localhost:3000/games',
      {
        title: props.formData.title,
        developer: props.formData.developer,
        publisher: props.formData.publisher,
        genre: props.formData.genre,
        image: props.formData.image,
      }).then(()=>{
        axios
        .get('http://localhost:3000/games')
        .then((response)=>{
          props.setGames(response.data)
        })
      })
//   g.target.reset()
}


    return (
      <div>
      <h1>Insert Game Information!</h1>
        <form className='form-group' onSubmit={handleNewGame}>
          <input class="form-control origin" type='text' name='image' onChange={handleChange} placeholder="Image URL" value={props.formData.image} /><br/>
          <input class="form-control origin" type='text' name='title' onChange={handleChange} placeholder="Title" value={props.formData.title}/><br/>
          <input class="form-control origin" type='text' name='creator' onChange={handleChange} placeholder="Developer(s)" value={props.formData.developer}/><br/>
          <input class="form-control origin" type='text' name='genre' onChange={handleChange} placeholder="Genre(s)" value={props.formData.genre}/><br/>
          <input class="form-control origin" type='text' name='studio' onChange={handleChange} placeholder="Publisher(s)" value={props.formData.publisher}/><br/>
          <input type='submit' value="Add Game" />
        </form>
      </div>
    )
}

export default GameForm;