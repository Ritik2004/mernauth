const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors")
const app = express();
const userRoute = require("./routes/userRoute")
const port = 5000;

app.use(bodyParser.urlencoded({extended:false}))

//bodyParser is used to convert the incoming data from frontend 
// to json.
app.use(bodyParser.json())

app.use(cors());

const db = () => {mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName:"mernauth",
})
.then(()=>console.log("Database Connected"))
.catch(()=>console.log("Error in connecting"))
}

db();


app.use("/api/user", userRoute);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})