const Book = require("../models/book");

//CREACION DE LOS ENDPOINTS

//API GET

module.exports.book_get = (req, res) => {
    Book.find()
        .then((answer) => {
            console.log(answer)
            res.send(answer)
    })
    .catch((error) =>{
         res.status(400).json({error})
         console.log(error)
    })
}

//API POST

module.exports.post = (req, res) => {
    const {name, details, resultado, date} = req.body;
    const fecha = new Date (Date.UTC(date.year, date.month -1, date.day));
    Book.create({name, details, resultado, date:fecha})
    .then((answer) =>{
        console.log(answer)
        res.status(200).json(answer)
    })
    .catch((error) => {
        res.status(400).json(error)
        console.log(error)
    })
    console.log(fecha) 
    res.send(fecha)
}

//API DELETE

module.exports.delete = (req, res) => {
    console.log(req.params)
    const {id} = req.params;
    Book.deleteOne({_id: id})
    .then((answer) =>{
        console.log(answer)
        res.status(200).json(answer);
    })
    .catch((error) => {
        res.status(400).json(error)
        console.log(error)
    })
}