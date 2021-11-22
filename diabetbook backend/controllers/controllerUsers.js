const bcrypt = require ("bcrypt-nodejs");
const User = require ('../models/User.js');
//const jwt = require("../services/jwt");

function signUp(req, res){
    const user = new User();
    const {email, password, repeatPassword } = req.body;
    user.email = email;

    if(!password || !repeatPassword){
        res.status(404).send({
            message: "Rellene los campos.",
        });   
    }else{
        if(password !== repeatPassword){
            res.status(404).send({
                message: "Las contraseñas deben ser iguales",
            });
        }else{
            bcrypt.hash(password, null, null, function(err, hash){
                if(err){
                    res.status(500).send({
                        message: "Error"
                    });
                }else{
                    user.password = hash;
                    user.save((err, userStored) => {
                        if(err){
                            res.status(500).send({
                                message: "Correo ya registrado."
                            });
                        }else{
                            if(!userStored){
                                res.status(404).send({
                                    message: "Error al crear usuario"
                                });
                            }else{
                                res.status(200).send({
                                    admin: userStored
                                });
                            }
                        }
                    });
                }
            });
        }
    }
}

function login(req, res){
    const params = req.body;
    const email = params.email.toLowerCase();
    const password = params.password;

    User.findOne({email}, (err, userStored)=>{
        if(err){
            res.status(500).send({message: "Error server"});
        }else{
            if(!userStored){
                res.status(404).send({
                    message: "Este email no ha sido registrado"
                });
            }else{
                bcrypt.compare(password, userStored.password, (err, valid) => {
                    if(err){
                        res.status(500).send({
                            message: "Error server"
                        });
                    }else if(!valid){
                        res.status(404).send({
                            message: "Contraseña incorrecta"
                        })
                    }else{
                        res.status(200).send({
                            accessTokenUser: jwt.createAccesToken(userStored),
                            refreshTokenUser: jwt.createRefreshToken(userStored)
                        });
                    }
                });
            }
        }
    });
}

module.exports = {
    signUp,
    login
}