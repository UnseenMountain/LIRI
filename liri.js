require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");



var appCommand = process.argv[2];

var userSearch = process.argv.slice(3).join(" ");

function run(appCommand, userSearch){
    switch(appCommand){
        case "spotifi this song":
            getSpotifi(userSearch);
            break;

        case "cosert this":
            getConsert(userSearch)
            break;

        case "Movie-this":
            getMovie(userSearch)
            break;

                

    }
}


var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

console.log(queryUrl)

axios.get(queryUrl).then(
    function(response){
        console.log("Venue name" + response.data[0].venue.name + "\r\n")
        console.log("Venue location name" + response.data[0].location)
        console.log("event date" + response.moment().format("MMM Do YY"))

    }
)


