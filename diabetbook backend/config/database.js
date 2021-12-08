const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "cluster0";

const remoteHost = "cluster0.baq8s.mongodb.net";
const remoteUser = "root";
const remotePass = "toor"; 
const remoteDb = "cluster0";




exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb+srv://${remoteUser}:${remotePass}@${remoteHost}/${remoteDb}?retryWrites=true&w=majority`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
}