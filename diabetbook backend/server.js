const express = require("express");
const mongoose = require("mongoose");



const dotenv = require("dotenv")
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());

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

app.use(express.static(path.join(__dirname, 'public')));


const RegistroApi = require("./Routes/Registro");
const AuthApi = require("./Routes/Auth");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(RegistroApi);
app.use(AuthApi);
