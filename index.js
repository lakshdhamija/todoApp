const express = require('express');
const path = require('path');
const port = 8000;

//defining database and conneting to schema
const db = require('./config/mongoose');
const Todo = require('./models/todo'); 

const app = express();

app.use(express.urlencoded()); // to allow data to be understood by express

// specifying assets folder
app.use(express.static('./assets'));

// set up view engine
app.set('view engine', 'ejs');
//setup views path
app.set('views', './views');

// setup routes path. We can do './routes' also as it will automatically fetch index
app.use('/', require('./routes/index')); 

app.listen(port, function(err){
    if(err)
        console.log("Error in runnung the server", err);
    console.log("Express server is running on port", port);
});