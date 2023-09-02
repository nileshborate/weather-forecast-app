const request = require("request")
const http = require('http');

const geocode = (address,callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiYm9yYXRlbmlsZXNoIiwiYSI6ImNrcnFtdW1qdzJvbmQycWtkdmZvM2ZwM3YifQ.8IvFloUoJmdND3dB_MuacA";

    request({url, json:true},(error,{ body }) => {
        if(error){
            callback("Unable to connect to Location service !!",undefined);
        }else
        if(body.features.length==0){
            callback("Unable to find location. Try Another Search",undefined);
        }else{
            const longitude = body.features[0].center[0];
            const latitude = body.features[0].center[1];
            const location = body.features[0].place_name
            //console.log(latitude,longitude);
            const data = {
                latitude,
                longitude,
                location
            }
            callback(undefined,data)
        }
    })
}

const forecast = (latitude,longitude,callback) => {
    const url =  "http://api.weatherstack.com/current?access_key=8099067d386c526f4ea3369d68bedb3e&query="+latitude+","+longitude;

    request({url, json:true},(error,{ body }) => {
        if(error){
            callback("Unable to connect to weather service !!",undefined);
        }else
        if(body.error){
            callback("Unable to find location",undefined);
        }else{
            callback(undefined,"It is currently "+body.current.temperature+" degree out. It feels like "+body.current.feelslike+" degree out. Weather Description :"+body.current.weather_descriptions[0]);
        }
    })
}

module.exports = {
    geocode:geocode,
    forecast:forecast
}