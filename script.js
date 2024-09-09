const pokemonContainer = document.querySelector('.pokemon-container');

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) // Cambié 'ability' por 'pokemon'
    .then(res => res.json())
    .then(data => {
        createPokemon(data);
    });
}

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('image-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default; // Corregí 'font_default' por 'front_default'

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p'); // Corregí 'createElement8' por 'createElement'
    number.textContent = `#${pokemon.id.toString().padStart(3, '0')}`; // Cambié 0 por '0' para el padStart

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}

fetchPokemons(18);
