import data from './data.json'
const express = require('express')
const app = express()


const PORT = process.env.PORT || 80

app.get('/', (req,res) => {
    res.json(data)
})
app.listen(PORT, () => {
    console.log('Server has been started...')
})