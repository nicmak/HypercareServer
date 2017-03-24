//Dependencies

let express = require('express');
let router = express.Router();
let _ = require('lodash');
const Wreck = require('wreck')

//Routes
router.post('/users', function(req,res){
	console.log("in users request");
	let userData = _.cloneDeep(req.body);
	Wreck.post('https://hypercareapp.com:3000/public/createUser', { payload: userData},(err, response, payload) => {
		console.log("Got response from api");
		res.json('Post request is sent to hypercareapp')
	});

	console.log("After wreck request");


})

//Return router
module.exports = router