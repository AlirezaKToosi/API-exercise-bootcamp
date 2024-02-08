async function fetchAndRenderPokemons() {
  try {
    //Exercises 1
    const response = await fetch(
      "https://majazocom.github.io/Data/pokemons.json"
    );
    const pokemons = await response.json();

    pokemons.forEach((pokemon) => {
      console.log(pokemon.name);
    });

    const pokemonList = document.getElementById("pokemon-list");
    pokemons.forEach((pokemon) => {
      const listItem = document.createElement("li");
      listItem.textContent = pokemon.name;
      pokemonList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching pokemons:", error);
  }
}

//Exercises 2
async function fetchAndRenderDogs() {
  try {
    const response = await fetch("https://majazocom.github.io/Data/dogs.json");
    const dogs = await response.json();

    dogs.forEach((dog) => {
      console.log(dog.name);
    });

    const dogList = document.getElementById("dog-list");
    dogs.forEach((dog) => {
      const listItem = document.createElement("li");
      listItem.textContent = dog.name;
      dogList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching dogs:", error);
  }
}
//Exercises 3
async function fetchAndRenderBooks() {
  try {
    const response = await fetch("https://majazocom.github.io/Data/books.json");
    const books = await response.json();

    const bookList = document.getElementById("book-list");
    books.forEach((book) => {
      if (book.pages < 500) {
        const listItem = document.createElement("li");
        listItem.textContent = book.title;
        bookList.appendChild(listItem);
      }
    });
  } catch (error) {
    console.error("Error fetching dogs:", error);
  }
}

//Exercises 4
async function fetchAndRenderVisitors() {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/attendees.json"
    );
    const visitors = await response.json();

    const visitorListAttending = document.getElementById(
      "visitors-attending-list"
    );
    const visitorListAttendingHaveAllergy = document.getElementById(
      "visitors-attending-haveAllergy-list"
    );
    visitors.forEach((visitor) => {
      if (visitor.attending) {
        const listItem = document.createElement("li");
        listItem.textContent = visitor.name;
        visitorListAttending.appendChild(listItem);
        if (visitor.allergies.length > 0) {
          const listItem = document.createElement("li");
          listItem.textContent = visitor.name;
          visitorListAttendingHaveAllergy.appendChild(listItem);
        }
      }
    });
  } catch (error) {
    console.error("Error fetching dogs:", error);
  }
}

fetchAndRenderPokemons();
fetchAndRenderDogs();
fetchAndRenderBooks();
fetchAndRenderVisitors();
