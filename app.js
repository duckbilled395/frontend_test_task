const express = require('express')
const fs = require('fs')
const app = express()
const port = 5000

app.set('view engine', 'ejs')

app.use(express.static(`${__dirname}/src/styles`));

const root = require('./routes')

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})

app.use('/', root)

