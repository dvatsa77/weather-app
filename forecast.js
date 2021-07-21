const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3836e8d72fd42b225784e2f06df501d7&query=' + latitude + ',' + longitude + '&units=m'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to location services!!", undefined)
        }
        else if (response.body.error) {
            callback("Unable to find location. Try another serach!!", undefined)
        }
        else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                Weather_description: response.body.current.weather_descriptions[0]
            })
        }
    })
}
module.exports=forecast