const  Mongoose =require ("mongoose");

const Schema= Mongoose.Schema;

const bookShema = new Schema({
    name: { type=String, required= true},
    details: {type= String, required=false},
    resultado: {type=String, required=true},
    date: { type= Date, required= true}
});

const Book = Mongoose.model("Book", bookShema);

module.exports = Book;