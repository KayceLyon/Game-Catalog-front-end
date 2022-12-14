import React from "react";
const Edit = ({ formData, handleCancelClick, handleChange}) => {
return (
<tr>
    <td>
    <input 
            className="form-control origin" 
            type='text'  
            placeholder="Image URL"
            name="image"
            onChange={handleChange}
            value={formData.image}    
            ></input></td>
    <td> 
    <input 
            className="form-control origin" 
            type='text'  
            placeholder="Title" 
            name="title" 
            onChange={handleChange}
            value={formData.title}    
            ></input></td>
   <td> 
    <input 
            className="form-control origin" 
            type='text' 
            placeholder="Developer(s)" 
            name="developer" 
            onChange={handleChange}
            value={formData.developer}    
            ></input></td>
    <td>
        <input
            className="form-control origin" 
            type='text' 
            placeholder="Publisher(s)" 
            name="publisher" 
            onChange={handleChange}
            value={formData.publisher}    
            ></input></td>
     <td> 
    <input 
            className="form-control origin" 
            type='text'  
            placeholder="Genre(s)" 
            name="genre" 
            onChange={handleChange}
            value={formData.genre}    
            ></input></td>
        <td>
        <button type="submit" > Save </button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
)
}

export default Edit;