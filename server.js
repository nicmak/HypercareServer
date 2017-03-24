//Dependencies
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors')
let path = require('path');


//Express
let app = express();

app.use(cors())

app.use(bodyParser.json())
//This will handle json content by parsing it...
app.use(bodyParser.urlencoded({extended:true}))
// Refer to documentation, Body Parser middleware



//Set Static Path
// app.use(express.static(path.join(__dirname,'Public')))


//Routes
app.use('/api', require('./routes/api'));


//Start Server
app.listen(8000,  () => {
	console.log("Server Started on Port 8000")
})

