const mongoose = require("mongoose")

const db = () => {mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName:"mernauth",
})
.then(()=>console.log("Database Connected"))
.catch(()=>console.log("Error in connecting"))
}

module.exports = db;

