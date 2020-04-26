module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller")
    var router = require("express").Router();
    
    //create a new turorial
    router.post("/", tutorials.create)

    app.use('/api/tutorials', router);
};