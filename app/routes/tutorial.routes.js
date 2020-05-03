module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller")
    var router = require("express").Router();
    
    //create a new turorial
    router.post("/", tutorials.create)

    //get tutorial data
    router.get("/", tutorials.getAll);

    app.use('/api/tutorials', router);
};