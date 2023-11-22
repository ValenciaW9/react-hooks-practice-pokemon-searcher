import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Added a comma here

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddPokemon = (newPokemon) => {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then((data) => {
        setPokemonData([...pokemonData, data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredPokemon = pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onSearch={handleSearch} />
      <br />
      <PokemonCollection pokemonData={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;