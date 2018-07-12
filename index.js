// @ts-check
// Imports
const express = require('express')
const bodyParser = require('body-parser')
const terminalLink = require('terminal-link')
const path = require('path')
// Local config variables
const port = 3000
// App settings
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index', { name: 'hamster', food: 'nuts'})
})

app.get('/teams', function(req, res) {
    res.json({
        name: 'NY NICKS'
    })
})

app.post('/', function(req, res) {
    const data = req.body

    res.json({
        message: data
    })
}) 

app.listen(port, function(err) {
    if(err) {
        console.log(err)
        return
    }
    const link = terminalLink('app running on port', `http://localhost:${port}`)
    console.log(link)
})