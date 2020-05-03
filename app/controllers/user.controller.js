const db = require('../models');
const User = db.users;
const { Op } = require("sequelize");


exports.createUser = (req,res) => {
    const payload = require("../seeds/seedData.json");
    User.bulkCreate(payload).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
        return 'hii';
    })
}

//if query string then check for condition else return all data
exports.getUsers = (req, res) => {
  const query = req.query.gender;
  var condition = query ? { gender: { [Op.iLike]: query } } : null;
    User.findAll({ where: condition })
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

//to statically get all users with age 32
exports.getUSersByAge = (req, res) => {
  User.findAll({ where: { age: 32 } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
