import React from "react";

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
        <button type="submit" onClick={() => {handleEditSubmit(game)}}> Save </button>
        <button type="button" onClick={handleCancelClick}>
          Return
        </button>
      </td>
    </tr>
)
}

export default Edit;