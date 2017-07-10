# Movies Application

For this project, we will be building a single page movie application (SPA). It
will allow users to add, edit, and delte movies, as well as rate them. We will
be using [`json-server`](https://github.com/typicode/json-server) to mock a
database and our backend, so that we can just worry about the front end and AJAX
requests.

The webpack dev server is configured to watch for changes both in the javascript
source, as well as the `public` directory. Whenever changes are detected, the
page will be reloaded. It will also proxy any requests that start with `/api` to
localhost:3000, which is where json-server is configured run.

`json-server` is configured to have a delay of 1.2 seconds, so you can see what
your application might actually look like, instead of serving instantaneous
reponses. You can modify this behavior by changing (or removing) the number
after the `-d` flag inside of the npm `dev` script.

## Setup

1. Clone this repo

1. Run `npm install`

1. Run `npm run dev` and visit
   [https://localhost:1313/](https://localhost:1313/) in your browser. Open up
   the console and inspect the output.

Take a look at the `src/index.js` file to get started. You will notice it has
examples of importing and requiring separate javascript files. Regardless of
which you choose to use, you should pick one and use it throughout your code
base, don't mix and match the two.

The file `src/getMovies.js` also contains an example api request. You can
reference this to get started building out the parts of your application that
interact with the api.

The `db.json` file contains your "database". You can edit this file directly to
make changes to your data, and this file will be updated if you make api
requests that modify the data.

## Specification

Your application should:

On page load:

- Display a "loading..." message
- Make an ajax request to get a listing of all the movies
- When the initial ajax request comes back, remove the "loading..." message
  and replace it with html generated from the json response your code
  receives

Allow users to add new movies

- Create a form for adding a new movie that has fields for the movie's title
  and rating
- When the form is submitted, the page should **not** reload / refresh,
  instead, your javascript should make a POST request to `/movies` with the
  information the user put into the form

Allow users to edit existing movies

- Give users the option to edit an existing movie
- A form should be pre-populated with the selected movie's details
- Like creating a movie, this should not involve any page reloads, instead
  your javascript code should make an ajax request when the form is
  submitted.

Delete movies

- Each movie should have a "delete" button
- When this button is clicked, your javascript should send a DELETE request

### Bonuses

- Add a `disabled` to buttons when their corresponding ajax request is still
  pending.
- Show a loading animation instead of just text that says "loading..."
- Modals for creating and editing movie forms
- Sort by rating, title, genre
- Pagination
- Movies should have genres
