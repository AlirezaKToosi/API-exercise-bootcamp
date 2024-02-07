async function fetchPokemonData() {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/pokemons.json"
    );
    const pokemons = await response.json();
    console.log(pokemons);
    let index = 1;
    console.log("Pokemon Name");
    pokemons.forEach((pokemon) => {
      console.log(`${index++} : name = ${pokemon.name}`);
      renderPokemon(pokemon.name);
    });
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
}
function renderPokemon(pokemonName) {
  const pokemonListElement = document.getElementById("pokemonList");
  const pokemonNameElement = document.createElement("p");
  pokemonNameElement.textContent = pokemonName;
  pokemonListElement.appendChild(pokemonNameElement);
}

window.onload = fetchPokemonData;
