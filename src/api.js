module.exports = {
  getBooks: () => {
    return fetch('/api/books')
      .then(response => response.json());
  },
  getBook : (id) => {
    return fetch(`/api/books/${id}`)
        .then(resp => resp.json());
  },
  postBook : (book) => {
    return fetch('api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
  },
  patchBook : (book, id) => {
    return fetch(`api/books/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
  },
  deleteBook : (id) => {
    return fetch(`api/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
};
