import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonData }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          sprite={pokemon.sprite}
          hp={pokemon.hp}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;