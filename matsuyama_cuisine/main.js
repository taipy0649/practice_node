const express = require('express'),
    app = express(),
    homeController = require('./controllers/homeController'),
    layouts = require('express-ejs-layouts'),
    errorController = require('./controllers/errorController')


app.set('port', process.env.POTR || 3000)
app.set('view engine', 'ejs')

// middleware
app.use(
    express.urlencoded({
        extended: false
    })
)
app.use(express.json())
app.use(layouts)

// routes
app.get('/', (req, res) => {
    res.send('Welcome to Home Page')
})

app.get('/courses', homeController.showCourses)
app.get('/contact', homeController.showSingUp)
app.post('/contact', homeController.postSignUpForm)

app.listen(app.get('port'), () => {
    console.log(`This page on port: ${app.get('port')}`)
})

app.use(errorController.pageNotFoudError)
app.use(errorController.internalServerError)
