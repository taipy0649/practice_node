module.exports = {
    sendReqParam: (req, res) => {
        let veg = req.params.vegetable
        res.send(`this is page or ${veg}`)
    },
    logPostData: (req, res) => {
        console.log(req.body)
        console.log(req.query)
        res.send('POST successful')
    },
    respondWithName: (req, res) => {
        let paramsName = req.params.myName
        res.render('index', { name: paramsName })
    }
}
