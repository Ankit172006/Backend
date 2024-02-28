

const express = require('express');
const app = express();

app.get('/home',(req,res)=>{
	res.send("This is Home page")
})
app.get('/instagram/:id',(req,res)=>{
  console.log(req.params.id)
  res.send(req.params.id)
  console.log(req.query)
  res.send(req.State)
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
