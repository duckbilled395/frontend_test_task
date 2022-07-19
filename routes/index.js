const express = require('express')
const fs = require('fs')
const router = express.Router()

const jsonData = fs.readFileSync('dataset.json', "utf-8", (err, data) => {
    if  (err) throw err
})

router.get('/', (req, res) => {

    const data = JSON.parse(jsonData)
    const meta = {
        keywords: data.page_meta.meta_keywords.split(', ').join(),
        description: data.page_meta.meta_description.split(' ').join()
    }
    console.log(data)
    res.render('pages/index', {data, meta})
})

module.exports = router;