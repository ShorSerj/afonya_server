const express = require('express')
const cors = require('cors')
const dataMin = require('./data-min.json') 
const dataMax = require('./data-max.json') 

const app = express()

app.use(cors())

const PORT = process.env.PORT || 80

app.get('/data-min', (req,res) => {
    res.json(dataMin)
})

app.get('/data-max', (req,res) => {
    res.json(dataMax)
})
app.listen(PORT, () => {
    console.log('Server has been started...')
})