var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var app = express();
var port = 3030;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
// Set Handlebars as the view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connection to sql db
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kinnera06",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
var routes = require('./controllers/controller.js');
app.use('/', routes);

app.listen(port, function() {
  console.log("listening on port", port);
});
