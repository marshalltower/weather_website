const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibWFyc2hhbGx0IiwiYSI6ImNrYXh3M3hkdzBjNnIyc283ZDF5N3pldWsifQ.Sszu0iDwuVPVOqMsoTSdfA&limit=1"

    request({ url, json:true}, (error, {body:{features:data}}) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        }
        else if (data.length === 0){
            callback('Unable to find coordinates for location', undefined)
        }
        else{
            callback(undefined, {
                latitude: data[0].center[1],
                longitude: data[0].center[0],
                location: data[0].place_name
            })
        }
    })
}

module.exports = geocode