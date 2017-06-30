const getMovies = () => {
  return fetch('/api/movies')
    .then(data => data.json())
    .catch(error => {
      alert('Oh no, something went wrong!\nCheck the console...');
      console.log(error);
    });
};

module.exports = getMovies;
