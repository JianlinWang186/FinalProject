import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Games from './game';

function game(props) {
  const { id } = props;
  const [Game, setGame] = useState(null);

  useEffect(() => {
    axios.get(' http://csc225.mockable.io/consoles' + id).then((response) => {
      setGame(response.data);
    });
  }, []);
 
  if (!Game) {
    return <p>Loading Game ID {id}</p>;
  }

  return (
    <p>
      <img src={game.name} />
      {game.price} by {game.releaseYear} in {game.Country}
    </p>
  );
}

export default Game;
