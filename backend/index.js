const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors")


const userRoute = require("./routes/userRoute")
const port = 5000;
const db = require('./database/data')
const app = express();

// app.use(bodyParser.urlencoded({extended:false}))

//bodyParser is used to convert the incoming data from frontend 
// to json.

app.use(bodyParser.json())
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials: true
}));


db();


app.use("/api", userRoute);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})