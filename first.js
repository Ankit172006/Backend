// const f = require('./Second.js'); 
// console.log(f.add(120,365))
// const os=require('os')
// console.log(os.hostname())

const express = require ('express')
const app =express()
 app.get("/",(req,res)=>{
   res.send("Wellcome to home Page")
 })
 app.delete("/about",(req,res)=>{
  res.send("Wellcome to about page")
})
app.get('/contect/:id',(req,res)=>{
  console.log(req.params.object)
  res.send()
  //  res.send(app.param.next)
  // res.send("This is contect Us PAGE")
})
app.get("*",(req,res)=>{
  res.send("This page not Exist")
})
// app.update('/update',(req,res)=>{
//   res.send("This is update page")
// })
app.get("/newget",()=>{
  console
})
 app.listen(8000,()=>{
    console.log("Server is start")
 })

//  module.exports = router;z
