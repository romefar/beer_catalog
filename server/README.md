# Beer catalog server

## Description

The server part of the beer catalog. Built with node.js (Express), MongoDB Atlas. The server is hoisted on heroku.

### Enviroment variables

Before starting the project you have to create a `.env` file and set the following variables:
- `MONGODB_URL` - uri to your mongodb database
- `SECRET_KEY` - a key to create jwt tokens (can be any string)

## Start

To start the app use the following command:

`npm run dev`

By default the server is available on http://localhost:5000
