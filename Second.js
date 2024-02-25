
const express = require('express');
const e = require('express');
const app = express();
const PORT = 5000;

const student = express.Router();
// app.use('/student', student);

student.get('/profile/:start/:end', function (req, res) {
	console.log( req.params['start']);
    dispatchEvent   (params)

	// console.log("Ending Page: ", req.params['end']);
	res.send();
})

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
