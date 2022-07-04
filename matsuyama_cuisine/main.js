const { urlencoded } = require('express')

const express = require('express'),
    app = express()


app.set('port', process.env.POTR || 3000)

app.use(
    express.urlencoded({
        extended: false
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to Home Page')
})

app.listen(app.get('port'), () => {
    console.log(`This page on port: ${app.get('port')}`)
})