const authService = require("../service/auth.service");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
    const {email, senha} = req.body;

    const user = await authService.loginService(email);

    if(!user){
        return res.status(400).send({ message: "Usuario não encontrado!"});
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if(!isPasswordValid){
        console.log(senha, user.senha);
        return res.status(400).send({ message: "Senha invalida"});
    }

    const token = authService.generateToken(user.id);

    const id = user._id;

    res.status(200).send({
        email,
        id,
        token
    });
}

module.exports = { loginController };