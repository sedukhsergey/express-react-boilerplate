const express = require('express');
const routes = express.Router();
const { profiles } = require('../db')

routes.get('/', (req, res) => {
    console.log('',)
    if (req.query.id && profiles.find(item => +req.query.id === +item.id)) {
        res.send(profiles.find(item => +req.query.id === +item.id))
    } else {
        res.send('not found')
    }
})

routes.post('/', (req, res) => {
    console.log('req.body',req.body)
    res.send({data: profiles})
})



module.exports = routes;
