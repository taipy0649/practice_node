const port = 3000,
    express = require('express'),
    app = express(),
    homeController = require('./controllers/homeController')
    
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


app.post("/", homeController.logPostData)

app.get("/item/:vegetable", homeController.sendReqParam)

app.listen(port, () => {
    console.log(`The project is running on port: ${port}`)
})
