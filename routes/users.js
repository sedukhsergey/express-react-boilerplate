var express = require('express');
var router = express.Router();
const objectId = require("mongodb").ObjectID;

/* GET users listing. */
router.get('/', (req, res, next) => {
  const collection = req.app.locals.collection;
  if (req.query.id) {
    const id = new objectId(req.query.id);
    collection.findOne({_id: id}, (err, user) => {
      if(err) return console.log(err);
      res.send(user);
    });
  } else {
    collection.find({}).toArray((err, users) => {
      if(err) return console.log(err);
      res.send(users)
    });
  }
});

router.post("/", function (req, res) {
  if(!req.body) return res.sendStatus(400);
  const { name, age } = req.body;
  const user = { name, age };
  const collection = req.app.locals.collection;
  collection.insertOne(user, function(err, result){
    if(err) return console.log(err);
    res.send({id: user._id});
  });
});

router.delete("/", (req, res) => {
  const id = new objectId(req.query.id);
  const collection = req.app.locals.collection;
  collection.findOneAndDelete({_id: id}, function(err, result){
    if(err) return console.log(err);
    res.send({id: result.value._id});
  });
});


module.exports = router;
