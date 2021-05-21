import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './game';

function Games() {
  const [Games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    
    axios.get('http://csc225.mockable.io/consoles').then((response) => {
      setGames(response.data);
    });
  }, []);

  if (Games.length === 0) {
    return <p>Loading!</p>;
  }

  if (!!selectedGames) {
    return (
      <div>
        <Game id={selectedGame} />
        <button onClick={() => setSelectedGame(null)}>Reset</button>
      </div>
    );
  }

  return (
    <div>
      {Games.map((game) => {
        return (
          <p key={game.id}>
            <button onClick={() => setSelectedGame(Game.id)}>
              {game.name}
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default Games;
