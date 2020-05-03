module.exports = app => {
    const users = require("../controllers/user.controller")
    var router = require("express").Router();
    
    //create a new turorial
    router.post("/", users.createUser);
    router.get("/", users.getUsers);

    app.use('/api/users', router);
};