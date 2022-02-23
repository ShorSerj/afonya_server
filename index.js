const express = require('express')
const cors = require('cors')
const data = require('./data.json') 

const app = express()
app.use(cors())

const PORT = process.env.PORT || 80

app.get('/', (req,res) => {
    res.json(data)
})
app.listen(PORT, () => {
    console.log('Server has been started...')
})