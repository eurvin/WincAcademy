let myMovie = {
  title: 'Puff the Magic Dragon',
  duration: 30,
  stars: ['Puff','Jackie','Living Sneezes'],
}

function movieDetails(title) {
  console.log(`${myMovie.title} lasts for ${myMovie.duration} minutes. Stars: ${myMovie.stars.join(', ')}.`);
}

movieDetails(myMovie)
