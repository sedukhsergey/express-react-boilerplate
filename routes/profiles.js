const express = require('express');
const routes = express.Router();
const objectId = require("mongodb").ObjectID;
const profiles = []

routes.get('/', (req, res, next) => {
    const collection = req.app.locals.profiles;
    if (req.query.id) {
        const id = new objectId(req.query.id);
        collection.findOne({_id: id}, (err, profile) => {
            if(err) return console.log(err);
            res.send(profile);
        });
    } else {
        collection.find({}).toArray((err, profiles) => {
            if(err) return console.log(err);
            res.send(profiles)
        });
    }
});

routes.post('/', (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const { name, age } = req.body;
    const profile = { name, age };
    const collection = req.app.locals.profiles;
    collection.insertOne(profile, function(err, result){
        if(err) return console.log(err);
        res.send({id: profile._id});
    });
})

routes.delete("/", (req, res) => {
    const id = new objectId(req.query.id);
    const collection = req.app.locals.profiles;
    collection.findOneAndDelete({_id: id}, function(err, result){
        if(err) return console.log(err);
        res.send({id: result.value._id});
    });
});




module.exports = routes;
