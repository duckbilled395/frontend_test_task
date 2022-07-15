const express = require('express')
const fs = require('fs')
const app = express()
const port = 5000

app.set('view engine', 'ejs')

const root = require('./routes')

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})

const jsonData = fs.readFileSync('dataset.json', "utf-8", (err, data) => {
    if  (err) throw err
})

app.use('/', root)

