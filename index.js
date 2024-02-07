async function fetchPokemonData() {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/pokemons.json"
    );
    const pokemons = await response.json();
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
//******************************************************************************* */
async function fetchDogsData() {
    try {
      const responseDog = await fetch(
        "https://majazocom.github.io/Data/dogs.json"
      );
      const dogs = await responseDog.json();
      let index = 1;
      console.log("dog Names");
      dogs.forEach((dog) => {
        console.log(`${index++} : name = ${dog.name}`);
        renderDog(dog.name);
      });
    } catch (error) {
      console.error("Error fetching Dog data:", error);
    }
  }
  function renderDog(dogName) {
    const dogListElement = document.getElementById("dogsList");
    const dogNameElement = document.createElement("p");
    dogNameElement.textContent = dogName;
    dogListElement.appendChild(dogNameElement);
  }

//window.onload = fetchPokemonData;
window.onload = fetchDogsData;
