const request=require('request')
const geocode=require('./geocode')

geocode('New York', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})


