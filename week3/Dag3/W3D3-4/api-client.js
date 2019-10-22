const API_KEY = '';

async function apiRequest(apiString, API_KEY, method) {
  const apiUrl = `https://api.themoviedb.org/3${apiString}?api_key=${API_KEY}`;
  const result = await fetch(apiUrl, {
    method: `${method}`
    })
    .then(response => response.json())
    .catch(error => console.log(error))

    return result;
}

async function getMovieById(apiString, API_KEY, method) {
  return apiRequest(apiString, API_KEY, method);
}

async function getMovieGenres(apiString, API_KEY, method) {
  return apiRequest(apiString, API_KEY, method);
}

async function getTopRatedMovies(apiString, API_KEY, method) {
  return apiRequest(apiString, API_KEY, method);
}

// async function getMovieGenres(apiString, API_KEY, method) {
//   return apiRequest(apiString, API_KEY, method);
// }
// // postMovieRating();
