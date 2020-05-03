module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      _id: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };