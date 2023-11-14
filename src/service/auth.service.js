const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email: email }).select("senha");

const generateToken = (usserId) => jwt.sign({ id: usserId }, process.env.SECRET, {  expiresIn: 86400 });

module.exports = {
    loginService,
    generateToken
}