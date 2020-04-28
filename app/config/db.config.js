module.exports = {
    HOST: "172.16.13.72",
    USER: "postgres",
    PASSWORD: "root",
    DB: "NodeTask",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };