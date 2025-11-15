
const express = require('express')
const app = express()

app.use(express.static('dist'))

app.get("/api", (req,res) => {
    res.json({"data":"1"})
})

app.listen(8080, (no) => {console.log(`App running on ${8080}`)})