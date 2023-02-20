const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Cargar rutas.
const hello_routes = require("./zRoutes/hello.js");
const task_routes = require("./zRoutes/task.js");


//Rutas base.

app.use("/api", hello_routes);
app.use("/api", task_routes);

module.exports = app;