const jwt = require("jsonwebtoken");

const {findUserByIdService} = require("../service/usuario.service");
const { schema } = require("../model/Usuario");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ message: "O token não foi informado!" });
    }

    const parts = authHeader.split(" "); //["Bearer, <token>"]

    if (parts.length !== 2) {
        return res.status(401).send({ message: "Token inválido!" });
    }

    const [schema, token] =  parts;

    //teste para verificar se existe a palavra escrita no Schema
    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({ message: "Token mal formado!" });
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if (err) {
            return res.status(500).send({ message: "Token inválido!" });
        }

        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id){
            return res.status(401).send({ message: "Token inválido!" });
        }

        req.userId = decoded.id;

        return next();
    });
}