const express = require("express");
const app = express();
const routeMouse = require('./routes');

app.use(express.json());
app.use('',routeMouse)

module.exports = app;