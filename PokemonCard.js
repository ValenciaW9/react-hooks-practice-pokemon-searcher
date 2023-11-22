import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isFront, setIsFront] = useState(true);

  const handleCardClick = () => {
    setIsFront(!isFront);
  };

  return (
    <Card onClick={handleCardClick}>
      <div>
        <div className="image">
          <img alt={pokemon.name} src={isFront ? pokemon.frontUrl : pokemon.backUrl} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;