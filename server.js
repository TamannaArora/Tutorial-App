var express = require('express');
var bodyParser = require("body-parser");
var cors = require("cors");

const app = express()

const db = require("./app/models");
db.sequelize.sync();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests of content-type application/json
app.use(bodyParser.json());

//parse request of url-encoded
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    res.send('Hi There')
});

require("./app/routes/tutorial.routes")(app);
// require("./app/routes/user.routes")(app);
const port = 3000

app.listen(port, function() {
    console.log('Server running on port ${port}')
})