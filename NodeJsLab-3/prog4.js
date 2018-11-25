//npm install request
//node prog4 --id=2
const request = require('request');
const yargs = require('yargs')
const id = yargs.argv['id']

let GetUserGeoData = (id, callback) => {
    request.get('https://jsonplaceholder.typicode.com/users/' + id, function (error, response, body) {
        if (error){
            console.log('Connection error while getting user data.')
        }
        else if (response.statusCode === 200) 
            callback(JSON.parse(body))
        else if (response.statusCode === 404)
            console.log('User with given ID not found.')
    });
}

let DisplayUserGeoData = (user) => {
    if (user) {
        console.log(user.name)
        console.log('lat ', user.address.geo.lat)
        console.log('lng ', user.address.geo.lng)
    }
}

let GetWeatherForecast = (lat, lon, callback) => {
    request.get('https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=' + lat + '&lon=' + lon, function (error, response, body) {
        if (error){
            console.log('Connection error while getting weather forecast.')
        }
        else if (response.statusCode === 200) 
            callback(JSON.parse(body))
        else if (response.statusCode === 404)
            console.log('Weather forecast not found.')
    });
}

let DisplayWeatherForecast = (forecast) => {
    console.log('Temperature: ', forecast.main.temp)
    console.log('Pressure: ', forecast.main.pressure)
    console.log('Humidity: ', forecast.main.humidity)
    console.log('Min Temperature: ', forecast.main.temp_min)
    console.log('Max Temperature: ', forecast.main.temp_max)
}

let DisplayUserDataAndGetWeatherForecast = (user) => {
    DisplayUserGeoData(user)
    GetWeatherForecast(user.address.geo.lat, user.address.geo.lng, DisplayWeatherForecast)
}

if (id) {
    GetUserGeoData(id, DisplayUserDataAndGetWeatherForecast)
}
else {
    console.log('Parameter value for id was not provided')
}

