import React from "react";

const Read = ({ game, handleEditClick, handleDelete }) => {
  return (
      <tr >
      <td><img className="table-image" src={game.image} /></td>
      <td>{game.title}</td>
      <td>{game.developer}</td>
      <td>{game.publisher}</td>
      <td>{game.genre}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, game)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDelete(game)}>
          Delete
        </button>
      </td>
    </tr>

  );
};

export default Read;