# LIRI

LIRI uses the following commands:

spotify-this-song
movie-this
do-what-it-says
Technologies used:
Node.js
Javascript
npm packages:
Streaming API's.
spotify - A simple to use API library for the Spotify REST API.
request - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
dotenv - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

How to Run LIRI-Bot;
Step one: node liri spotify-this-song <song name here>.

This will show the following information about the song in your terminal/bash window:

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
If no song is provided then the program will default to "My Heart Will Go On" by Celine Dion

Step two: node liri.js movie-this <movie name here>.

This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody'