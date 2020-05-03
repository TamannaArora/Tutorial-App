const db = require('../models');
const User = db.users;


exports.createUser = (req,res) => {
    const payload = require("../seeds/seedData.json");
    User.bulkCreate(payload).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
        return 'hii';
    })
}

exports.getUsers = (req, res) => {
    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
}
