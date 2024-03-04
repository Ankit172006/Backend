

const express = require('express');
const app = express();
app.use=express.json();
 const data=((req,res,next)=>{
  if(req.query.pass==="Strong@098!")
  {
    next();
  }
  else
  {
    console.log("Password Incorrect+")
  }

 })

app.get('/home',(req,res)=>{
	res.send("This is Home page")
  // console.log(req.query.pass)

})
app.get('/instagram/:id',(req,res)=>{
  console.log(req.params.id)
  res.send(req.params.id)
  console.log(req.query)
  res.send(req.State)
})
app.get("/password",data,(req,res)=>{
  console.log("Login")
  console.log("pass:*********")
  res.send("Login !👍👍👍👍👍")
})
app.post('/postimg',(req,res)=>{
  res.send("From post side")
})
app.listen(6060,()=>{
    console.log("Server is start")
 })



















// const express = require('express');
// const e = require('express');
// const app = express();
// const PORT = 9000;

// const student = express.Router();
// // app.use('/student', student);

// student.get('/profile/:id', function (req, res) {
// 	console.log( req.params.id);
// 	res.send("Hello from Backend");
// })

// app.listen(PORT, function (err) {
// 	if (err) console.log(err);
// 	console.log("Server listening on PORT", PORT);
// });
