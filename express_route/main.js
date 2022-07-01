const port = 3000,
    express = require('express'),
    app = express()

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.use(
    express.urlencoded({
        extended: false
    })
)

app.use(express.json())

app.post("/", (req, res) => {
    console.log(req.body)
    console.log(req.query)
    res.send('POST successful')
})

app.get("/item/:vegetable", (req, res) => {
    let veg = req.params.vegetable
    res.send(`this is page or ${veg}`)
})

app.listen(port, () => {
    console.log(`The project is running on port: ${port}`)
})
