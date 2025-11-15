import axios from "axios";
const express = require('express')
const app = express()

app.use(express.static('dist'))

const getAll = () => {
    const req = axios.get('/')
    return req.then(res => res.data)
}
