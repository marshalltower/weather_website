const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=16081910d8bcdcab44e78565c41a4f66&query=" + latitude + "," + longitude + "&units=m"

    request( {url, json:true}, (error, {body:{error:dataError}, body:{current:data}}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }
        else if(dataError){
            callback('Unable to find location', undefined)
        }
        else{
            let msg = '<img src="' + data.weather_icons[0] + '"></br>'
            msg += data.weather_descriptions[0] + ". It is currently " + data.temperature + " degrees out. It feels like " + data.feelslike + " degrees out" + ".";
            callback(undefined,  msg)
        }
    })
}

module.exports = forecast