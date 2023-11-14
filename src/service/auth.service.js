const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email: email }).select("senha");

const generateToken = (usserId) => jwt.sign({ id: usserId }, "8d1df6asr21dsa87rdf46fead749fds", {  expiresIn: 86400 });

module.exports = {
    loginService,
    generateToken
}