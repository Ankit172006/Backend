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

//  const name = new ankit({
//     name:"karan",
//     password:"HP 82",
//     Monumber:85265935656946
// })
ankit.findByIdAndUpdate('65eb031cd4ac33b81010df61')
.then((value)=>{console.log(value)})
//  name.save();
 app.listen(9999)

//  boAt Rockerz 510 Super Extra Bass Bluetooth Headset

// 1______
// update data in mongodb

// ankit.findByIdAndUpdate('65eb031cd4ac33b81010df61')
// .then((value)=>{console.log(value)})

// 2_____
// delete data in mongodb
// ankit.findByIdAndDelete('65eb031cd4ac33b81010df61')
// .then((value)=>{console.log(value)})

// 3_____
// Read data in mongodb
// ankit.findById('65eb031cd4ac33b81010df61')
// .then((value)=>{console.log(value)})