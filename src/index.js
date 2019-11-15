/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getBook, getBooks, postBook, patchBook, deleteBook} = require('./api.js');

getBooks().then((books) => {
  console.log('Here are all the books:');
  books.forEach(({title, author, year}) => {
    console.log(`${title} by ${author} - ${year}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

getBook(1)
    .then(book => {
      console.log("Making a request to a single book");
      console.log(`${book.title} by ${book.author} - ${book.year}`);
    })
    .catch(() => console.log('The important thing is you tried...'));

// postBook({
//   "author": "Jim Davis",
//   "country": "United States",
//   "imageLink": "images/???.jpg",
//   "language": "English",
//   "link": "https://www.amazon.com/Garfield-Loses-His-Feet-Book/dp/0345464672\n",
//   "pages": 98,
//   "title": "Garfield Loses His Feet",
//   "year": 1984
// }).then(getBooks).then((books) => {
//   console.log('Here are all the books:');
//   books.forEach(({title, author, year}) => {
//     console.log(`${title} by ${author} - ${year}`);
//   });
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.');
//   console.log(error);
// });

// patchBook({
//   "pages": 1201,
//   "title": "Garfield Learns Python III",
//   "year": 2023
// }, 26).then(getBooks).then((books) => {
//   console.log('Here are all the books:');
//   books.forEach(({title, author, year}) => {
//     console.log(`${title} by ${author} - ${year}`);
//   });
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.');
//   console.log(error);
// });

deleteBook(27).then(postBook({
  "author": "Jim Davis",
  "country": "United States",
  "imageLink": "images/???.jpg",
  "language": "English",
  "link": "https://www.amazon.com/Garfield-Loses-His-Feet-Book/dp/0345464672\n",
  "pages": 98,
  "title": "Garfield Loses His Feet",
  "year": 1984
})).then(getBooks).then((books) => {
  console.log('Here are all the books:');
  books.forEach(({title, author, year}) => {
    console.log(`${title} by ${author} - ${year}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});