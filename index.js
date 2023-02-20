const express = require('express');
const mongoose = require("mongoose");
const app = require("./app.js");
const port = 3000;

const urlMongoAtlas = "mongodb+srv://admin:admin123456@alejandrocorcino.xeu1jvz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(urlMongoAtlas, (err, res) => {
  try{
    if(err){
      throw new Error(err);
    }
    else{
      console.log("La conexion a la BD es correcta.");

      app.listen(port, () => {
        console.log('La aplicación está en ejecución en el puerto 3000');
      }); 


    } 



  }catch(error){
    console.log(error);
  }
});

