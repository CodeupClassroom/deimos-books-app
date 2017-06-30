# `npm` bootstrap

A simple template for a front-end project with babel, json-server, webpack and
the webpack dev server.

## Setup

1. Clone this repo

1. Run `npm install`

1. Run `npm run dev` and visit
   [https://localhost:1313/](https://localhost:1313/) in your browser!

The webpack dev server is configured to watch for changes both in the
javascript source, as well as the `public` directory. It will also proxy any
requests that start with `/api` to localhost:3000, which is where json-server is
configured run.

`json-server` is configured to have a delay of 1.2 seconds, so you can see what
your application might actually look like, instead of serving instantaneous
reponses. You can modify this behavior by changing (or removing) the number
after the `-d` flag inside of the npm `dev` script.
