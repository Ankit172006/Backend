const express = require("express")
const mongoose = require("mongoose")


const app = express();

  mongoose.connect("mongodb://localhost:27017/Asus")
  .then(()=>console.log("Data base is connected"))
  const nameSchema = new mongoose.Schema({
    name:String,
    password:String,
    Monumber:Number
  })
 const ankit =mongoose.model("tuf",nameSchema)

 const name = new ankit({
    name:"karan",
    password:"HP 82",
    Monumber:85265935656946
})
 name.save();
 app.listen(9999)

//  boAt Rockerz 510 Super Extra Bass Bluetooth Headset