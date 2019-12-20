require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var axios = require("axios");



var Spotify = new Spotify(keys.spotify);

var appCommand = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

function liriRun(appCommand, userSearch){
    switch(appCommand){
        case "spotifi-this-song":
            getSpotifi(userSearch);
            break;

        case "consert-this":
            getConsert(userSearch)
            break;

        case "Movie-this":
            getMovie(userSearch)
            break;

        case "do-what-it-sais":
            doWhatItSays(userSearch)
            break;
        default:
            console.log("please enter one of the following commands: consort-this", "spotifi-this-song", "movie-this", "do-what-it-sais");

    }
}

function getSpotifi(songName){
    var spotify = new Spotify(keys.spotify);

    if(!songName) {
        songName = "the Sign";
    };

    spotify.search({ type: "track", query: songName}, function (err,data){ 
        if (err) {
            return console.log('error occored: ' + err);
        }
        console.log("++++++++++++++++++++")
        console.log("artists name: " + data.tracks.items[0].album.artists[0].name + "\r\n");
        console.log("song: " + data.tracks.items[0].name + "\r\n");
        console.log("song preview link: " + data.tracks.items[0].href + "\r\n");
        console.log("Album: " + data.tracks.items[0].album.name + "\r\n");

        var logSong = "Spotifi log entry" + "\nArtist" + data.tracks.items[0].album.artist[0].name[0].album.name[0].href[0];
        fs.appendFile("log.txt", logSong, function (err) {
            if (err) throw err;
        }); 
    });
};
 
function getBandsInTown(artist){
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

console.log(queryUrl)

axios.get(queryUrl).then(
    function(response){
        console.log("Venue name" + response.data[0].venue.name + "\r\n")
        console.log("Venue location name" + response.data[0].venue.city + "\r\n")
        console.log("event date" + moment(response.data[0].datatime).format("MMM Do YY") + "\r\n");

        var logconsert = "Band log entry" + "\nName of artist" + artist +"\name of artist" + venue.city + "\name of the city" + datatime + "\time of consert";

        fs.appendFile("log.txt", logconsert, function (err){
            if (err) throw err;
        });
    }
 )

 function getMovies(movieName){
    if (!movieName){
      movieName = "Mr. Nobody"
    }
    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + movieName)
      .then(function(data){
        var results= `
        Title of the Movie: ${data.data.Title}
        Year Released: ${data.data.Year}
        IMDB Rating: ${data.data.Rated}
        Rotten Tomatoes Score: ${data.data.Ratings[1].Value}
        Country: ${data.data.Country}
        Language: ${data.data.Language}
        Plot Summary: ${data.data.Plot}
        Cast: ${data.data.Actors}
        `;
        console.log(results);
      })
      .catch(function (error){
        console.log(error);
      })
      
     
  }
  
//   function doWhatItSays(){
//     fs.readFile("random.txt", "utf8", function (error, data){
//         if (error){
//             return console.log(error) {

//             }else{
//                 console.log(data);

//                 var.randomData = 
//             }
            
//         }
//     })
//   }
function logResults(data){
    fs.appendFile("log.txt", data, function(err){
        if(err) throw err;
    });
}
liriRun(appCommand, userSearch)
