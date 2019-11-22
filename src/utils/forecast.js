//loaidng request module

const request = require('request')

const forecast = (latitude, longitude , callback) => {
const url = 'https://api.darksky.net/forecast/9ab20a64412a868d885b78051788e8b1/' + latitude + ',' + longitude

//shorthand syntax used in url and destrcturing in response 
request({url , json: true}, (error, {body}) =>{           
    if(error){
        callback('Unable to connect to weather service', undefined)

    } else if(body.error){
        callback('Unable to find location', undefined)
    } else{
        
        callback(undefined,  body.daily.data[0].summary + ' It is currently ' + body.currently.temperature   + ' degrees out there. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + ' There is a ' + body.currently.precipProbability + ' chances of rain.' )

    }

  })

}



module.exports = forecast