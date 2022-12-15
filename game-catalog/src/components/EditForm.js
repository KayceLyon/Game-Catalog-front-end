import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Navigation from './Navigation'
import Edit from './TableEdit'
import Read from './TableRead'

const EditForm = (props) => {

  const [editGameId, setEditGameId] = useState(null);
  const [updatedImage, setUpdatedImage] = useState()
  const [updatedTitle, setUpdatedTitle] = useState()
  const [updatedDev, setUpdatedDev] = useState()
  const [updatedPub, setUpdatedPub] = useState()
  const [updatedGenre, setUpdatedGenre] = useState()

  const handleUpdateImg = (g) => {
    setUpdatedImage(g.target.value)
  }
  const handleUpdateTitle = (g) => {
    setUpdatedTitle(g.target.value)
  }
  const handleUpdateDev = (g) => {
    setUpdatedDev(g.target.value)
  }
  const handleUpdatePub = (g) => {
    setUpdatedPub(g.target.value)
  }
  const handleUpdateGenre = (g) => {
    setUpdatedGenre(g.target.value)
  }
  const handleEditSubmit= (g)=> {
        axios 
          .put(
            `http://localhost:3000/games/${g._id}`,
            {
            title: updatedTitle,
            developer: updatedDev,
            publisher: updatedPub,
            genre: updatedGenre,
            image: updatedImage,
            }
          ).then(()=> {
            axios 
              .get('http://localhost:3000/games')
              .then((response)=> {
                props.setGames(response.data)
              })
          })
      }
      
      const handleEditClick = (event, game) => {
        event.preventDefault();
        setEditGameId(game._id);
      }
      const handleCancelClick = () => {
        setEditGameId(null);
      }
      const handleDelete = (g) => {
          axios 
          .delete(`http://localhost:3000/games/${g._id}`)
          .then(()=> {
            axios 
              .get('http://localhost:3000/games')
              .then((response)=> {
               props.setGames(response.data)
              })
          })
}

useEffect(()=>{
  axios
    .get('http://localhost:3000/games')
      .then((response)=>{
          props.setGames(response.data)})
  }, []);

    return (
      <div>
          <table>
          <thead>
            <tr>
              <th>Img url</th>
              <th>Title</th>
              <th>Developer(s)</th>
              <th>Publisher(s)</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
        {props.games.map((game)=>( 
          <Fragment>
            {editGameId === game._id ? (
            <Edit
            key={game._id}
            game={game}
            handleUpdateImg={handleUpdateImg}
            handleUpdateTitle={handleUpdateTitle}
            handleUpdatePub={handleUpdatePub}
            handleUpdateDev={handleUpdateDev}
            handleUpdateGenre={handleUpdateGenre}
            handleCancelClick={handleCancelClick}
            handleEditSubmit={handleEditSubmit}
            />       
           ) : (
            <Read
            game={game} 
            handleEditClick={handleEditClick}
            handleDelete={handleDelete}
            />
            )}        
          </Fragment>
          ))}
                </tbody>
            </table>
        </div>
    )
}

export default EditForm