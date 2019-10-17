// fetch random Pokemon url
async function getRandomPokemon() {
    const pokemonId = [Math.random() * 806 | 1];
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId }`;
    const pokemon = fetch(apiUrl,  {
        method: 'GET'
    })
      .then(res => res.json())
      .catch(error => {
        console.log(error);
      });
      
      return await pokemon;
  };
  