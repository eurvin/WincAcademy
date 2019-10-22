getMovieGenres('/genre/movie/list', API_KEY, 'GET').then(responseJSON => {
    const movies = responseJSON;
    setMovieGenres(movies);
});

getMovieById('/movie/420818', API_KEY, 'GET').then(responseJSON => {
    const movies = responseJSON;
    setMovieById(movie);
}); // the lionking
getMovieById('/movie/475557', API_KEY, 'GET') // joker
getMovieById('/movie/301528', API_KEY, 'GET') // toy story 4

getTopRatedMovies('/movie/top_rated', API_KEY, 'GET').then(responseJSON => {
    const topRated = responseJSON;
    setTopRatedMovies(topRated);
});

// getTopRatedActionMovies('/movie/top_rated', API_KEY, 'GET').then(responseJSON => {
//     const movies = responseJSON
//     console.log(movies);
//     setMovieGenres(movies)
//   console.log("hier is je data om iets mee te gaan doen:", responseJSON);
// });

const setMovieGenres = function(movieData){
    const moviesGenres = movieData.genres;
    moviesGenres.forEach(movieGenre => {
        const listItem = document.createElement('li');
        const listItemContent = `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`
        listItem.appendChild(document.createTextNode(listItemContent));
        document.getElementById("movieGenresList").append(listItem)
    })
}

const setTopRatedMovies = function(movieData){
    const topRatedMovies = movieData['results'];
    console.log(topRatedMovies);
    topRatedMovies.forEach(topRatedMovie => {
        const listItem = document.createElement('li');
        const listItemContent = `Film naam: ${topRatedMovie.title}, Gem. rating: ${topRatedMovie.vote_average}`
        listItem.appendChild(document.createTextNode(listItemContent));
        document.getElementById("topRatedList").append(listItem)
    })
}


const setMovieById = function(movie) {
  const moviesGenres = movieData.genres;
  moviesGenres.forEach(movieGenre => {
      const listItem = document.createElement('li');
      const listItemContent = `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`
      listItem.appendChild(document.createTextNode(listItemContent));
      document.getElementById("movieGenresList").append(listItem)
  })
};
