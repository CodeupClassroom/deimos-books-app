const getMovies = require('./getMovies.js');
const sayHello = require('./hello.js');

sayHello('World');

getMovies().then((movies) => {
  console.log('Heres all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
});
