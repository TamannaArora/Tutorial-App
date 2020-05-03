module.exports = app => {
    const users = require("../controllers/user.controller")
    var router = require("express").Router();
    
    //create a new turorial
    router.post("/", users.createUser);
    router.get("/", users.getUsers);

    //to statically get all users with age 32
    router.get("/age", users.getUSersByAge);

    app.use('/api/users', router);
};