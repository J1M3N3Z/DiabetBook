const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const bookAPI = require("./Routes/route");

dotenv.config();
const app = express();



//Connection to the DataBase
const url = "mongodb+srv://" + process.env.DB_USERNAME + ":" + 
process.env.DB_PASSWORD + "@cluster0.baq8s.mongodb.net/"+ process.env.DB_NAME + 
"?retryWrites=true&w=majority"; 

const options = {useNewUrlParser:true, useUnifiedTopology:true};


mongoose.connect(url, options)
.then(()=>{
    console.log("Database connected");
        // Listen to port 5000
        const port = process.env.PORT || 4000;
            app.listen(port, () => {
            console.log("Connected to port " + port);
    });   
})
.catch((error)=>{
    console.log(error)
})

app.use(bookAPI);
app.use(express.json());
app.use(express.urlencoded({extended:true}));