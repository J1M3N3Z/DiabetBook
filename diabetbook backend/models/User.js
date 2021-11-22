const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{ type: String, required:[true, 'Nombre obligatorio']},
    lastname: { type: String, required: [true, 'Apellido obligatorio'] },
    telephone: {type:String},
    password: {type:String}
})

const User = Mongoose.model("User", UserShema);

module.exports = User;