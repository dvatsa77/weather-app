const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')

const address = process.argv[2]
if (!address) {
    console.log("Please provide an address")
}
else {
    //first we get the coordinates of the place from the address using the geocode API
    //then using the coordinates we get the weather forecast at the place using the weatherstack API
    geocode(address, (error, geocodeData) => {
        if (error) {
            return console.log(error)
        }

        forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(geocodeData.location)
            console.log(forecastData)
        })
    })
}





