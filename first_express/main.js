// this code show 'hello world' on the browser

const port = 3000,
    express = require('express'),
    app = express()

app.get("/", (req, res) => {
    res.send('hello world.this is test.')
    console.log(req.params)
    console.log(req.body)
    console.log(req.query)
    console.log(req.url)
}).listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`)
})
