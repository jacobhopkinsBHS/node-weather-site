const request = require('request')

const forecast = ((longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ef474d4bf528074759142fa791ee626d&query=' + longitude + ',' + latitude + '&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.')
        }
    })
})

module.exports = forecast