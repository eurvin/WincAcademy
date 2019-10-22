const API_KEY = '';

async function getMovies() {
  const apiUrl = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
  const result = fetch(apiUrl,  {
    method: 'GET'
  })
    .then(res => console.log(res))
    .catch(error => {
      console.log(error);
    });
    return await result;
};
