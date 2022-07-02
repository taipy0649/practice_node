const port = 3000,
    express = require('express'),
    app = express(),
    homeController = require('./controllers/homeController'),
    layout = require('express-ejs-layouts')

app.set('view engine', 'ejs')
    
app.use(layout)

app.use(
    express.urlencoded({
        extended: false
    })
)

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.url)
    console.log(req.query)
    next()
})

app.get('/name/:myName', homeController.respondWithName)

app.post("/", homeController.logPostData)

app.get("/item/:vegetable", homeController.sendReqParam)

app.listen(port, () => {
    console.log(`The project is running on port: ${port}`)
})
