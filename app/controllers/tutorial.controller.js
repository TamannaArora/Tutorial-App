const db = require('../models')
const Tutorial = db.tutorials;

//Create and save a new tutorial
exports.create = (req, res) => {
    //validate the request
    if(!req.body.title) {
        res.status(404).send({
            message: "Content cannot be empty"
        });
        return;
    }

    //create the request
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published? req.body.published : false
    }

    //save the  req in db
    Tutorial.create(tutorial).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "ERROR"
        });
    });
}