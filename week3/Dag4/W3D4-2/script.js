// delete current pokemonCard element
const deletePokemon = function() {
    let pokemonContainer = document.querySelector('.pokemonContainer');
    // remove card element if present
    while (pokemonContainer.firstChild) {
        pokemonContainer.removeChild(pokemonContainer.firstChild);
    }
};

const createPokemonCard = function(pokemon) {
    //console.log(pokemon)
    const pokemonCard = document.createElement('div');
        pokemonCard.className = 'pokemonCard';

        const imgElement = document.createElement('img')
        imgElement.className = 'pokemonImg';
        imgElement.src = `${pokemon.sprites['front_default']}`;
        imgElement.alt = `${pokemon.name}`;

        const h5Element = document.createElement('h5');
        h5Element.innerHTML = `${pokemon.name}`;

        document.querySelector('.pokemonContainer')
        .appendChild(pokemonCard)
            .appendChild(imgElement)
            .insertAdjacentElement('afterend', h5Element);
}

const newPokemon = function() {
    deletePokemon();
    getRandomPokemon().then(pokemon => createPokemonCard(pokemon));
}
 
// add eventlistener for button
document.querySelector("button").addEventListener('click', function() {
    newPokemon();
});

// run script when all dom content is loaded.
document.addEventListener('DOMContentLoaded', function(event) {
    newPokemon()
});
