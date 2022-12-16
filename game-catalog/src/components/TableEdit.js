import React from "react";
import Button from 'react-bootstrap/Button'

const Edit = ({ game , handleEditSubmit, handleCancelClick, handleUpdateImg, handleUpdateTitle, handleUpdateDev, handleUpdatePub, handleUpdateGenre }) => {
return (
<tr>
    <td>
    <input 
            className="form-control origin" 
            type='text'  
            defaultValue={game.image} 
            name="image"
            onChange={handleUpdateImg}
            key={game._id}
            ></input></td>
    <td> 
    <input 
            className="form-control origin" 
            type='text'  
            defaultValue={game.title} 
            name="title" 
            onChange={handleUpdateTitle}
            ></input></td>
   <td> 
    <input 
            className="form-control origin" 
            type='text' 
            defaultValue={game.developer} 
            name="developer" 
            onChange={handleUpdateDev}
            key={game._id}
            ></input></td>
    <td>
        <input
            className="form-control origin" 
            type='text' 
            defaultValue={game.publisher} 
            name="publisher" 
            onChange={handleUpdatePub}
            key={game._id}
            ></input></td>
     <td> 
    <input 
            className="form-control origin" 
            type='text'  
            defaultValue={game.genre}
            name="genre" 
            onChange={handleUpdateGenre}
            key={game._id}
            ></input></td>
        <td>
        <Button variant="outline-success btn-sm" type="submit" onClick={() => {handleEditSubmit(game)}}> Save </Button>
        <Button variant="outline-dark btn-sm" type="button" onClick={handleCancelClick}>
          Return
        </Button>
      </td>
    </tr>
)
}

export default Edit;