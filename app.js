const express = require('express')
const app = express()
const https = require('https')

const url = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=f55591a2d60a7e74ab38840e087d7979&units=metric"

app.get('/', (req, res) => {

    https.get(url, (response) => {
        console.log(response.statusCode)
        response.on('data', (data) => {
            const weatherData = JSON.parse(data)
            console.log(weatherData.main.temp)
        })
    })

    res.send('Hello')
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})