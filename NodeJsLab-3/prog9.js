//npm install request
//node prog9 --id=2
const yargs = require('yargs')
const user = require('./modules/user')
const weather = require('./modules/weather')
const id = yargs.argv['id']

let DisplayUserDataAndGetWeatherForecast = (data) => {
    user.DisplayUserGeoData(data)
    weather.GetWeatherForecast(data.address.geo.lat, data.address.geo.lng, weather.DisplayWeatherForecast)
}

if (id) 
    user.GetUserGeoData(id, DisplayUserDataAndGetWeatherForecast)
else 
    console.log('Parameter value for id was not provided')
