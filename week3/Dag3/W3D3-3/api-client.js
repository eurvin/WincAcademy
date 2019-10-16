const API_KEY = 'c534dd64532fbaf1d17db47b1caa3431';

async function getMovies() {
  const apiUrl = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
  const result = fetch(apiUrl,  {
    method: 'GET'
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });
    return await result;
};
