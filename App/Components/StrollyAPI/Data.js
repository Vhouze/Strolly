const axios = require('axios').default;

/*
get list of shops
if no parameters, return everything
if lat, lng, radius, parse every shop in the radius of location
if mood, parse shops with this mood.

moods:
- bolDair
- afterwork
- bonneBeer
- cosy
- letsdance
- whatTheBarz
- letsplay
*/

export async function GetShops(lat = 0.00, lng = 0.00, radius = 0, mood = "") {
    const url= 'https://trendby.herokuapp.com/getShops'
    var parameters = {};
    var moodByTitle = {"Bol d'air": "bolDair", "Cosy": "cosy", "Afterwork": "afterwork", "Let's play": "letsPlay", "Dance": "letsDance", "WHAT THE BARZ": "whatTheBarz"};
    let finalMood = mood;

    if (mood != "" && moodByTitle[mood] != undefined)
        finalMood = moodByTitle[mood];

    if (lat != 0.00 && lng != 0.00 && radius != 0) {
        parameters.lat = lat;
        parameters.lng = lng;
        parameters.radius = radius;
    }

    if (finalMood != "") {
        parameters.mood = finalMood;
    }

    return(
        axios.post(url, parameters
        ).then(response => {
            return(response.data.message)
        })
        .catch(error => {
            console.log(error)
            return(null)
        })
    )
}
