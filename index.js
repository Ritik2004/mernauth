const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const port = 5000;

const db = () => {mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName:"mernauth",
})
.then(()=>console.log("Database Connected"))
.catch(()=>console.log("Error in connecting"))
}

db();
app.use(bodyParser.urlencoded({extended:false}))

//bodyParser is used to convert the incoming data from frontend 
// to json.
app.use(bodyParser.json())


app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})