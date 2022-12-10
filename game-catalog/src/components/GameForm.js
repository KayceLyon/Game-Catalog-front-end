import React from 'react'

const GameForm = (params) => {
    return (
        <form className='form-group' onSubmit={params.handleNewGame}>
          <input class="form-control origin" type='text' onChange={params.handleNewImage} placeholder="Image URL" /><br/>
          <input class="form-control origin" type='text' onChange={params.handleNewTitle} placeholder="Name of Game"/><br/>
          <input class="form-control origin" type='text' onChange={params.handleNewCreator} placeholder="Creator of Game"/><br/>
          <input class="form-control origin" type='text' onChange={params.handleNewGenre} placeholder="Game/Series Title"/><br/>
          <input class="form-control origin" type='text' onChange={params.handleNewStudio} placeholder="Design Studios"/><br/>
          <input type='submit' value="Add Game" />
        </form>
    )
}

export default GameForm