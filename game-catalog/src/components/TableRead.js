import React from "react";
import Button from 'react-bootstrap/Button'

const Read = ({ game, handleEditClick, handleDelete }) => {
  return (
      <tr >
      <td><img className="table-image" src={game.image} /></td>
      <td>{game.title}</td>
      <td>{game.developer}</td>
      <td>{game.publisher}</td>
      <td>{game.genre}</td>
      <td>
        <Button variant="outline-dark btn-sm" onClick={(event) => handleEditClick(event, game)}>
          Edit
        </Button>
        <Button variant="outline-danger btn-sm" onClick={() => handleDelete(game)}>
          Delete
        </Button>
      </td>
    </tr>

  );
};

export default Read;