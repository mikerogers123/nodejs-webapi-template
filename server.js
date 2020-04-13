const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('HCA RESTful API server started on: ' + port);