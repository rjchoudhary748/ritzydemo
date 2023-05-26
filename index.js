const express = require("express");
const app = express();
var path = require('path');

app.set("view engine", "ejs");
var route = require('./routers/route');

// view engine setup
app.use(express.static(path.join(__dirname, 'asset')));
app.use(express.static(path.join(__dirname, '')));
app.set('view engine', 'ejs');

app.use('/', route);

app.listen('8080');

module.exports = app;