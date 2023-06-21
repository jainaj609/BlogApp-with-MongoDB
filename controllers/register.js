const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../model/user');


const login = async(req, res) => {
    let loginData = req.body;
    if (!loginData) {
        return res.status(500).send({ msg: "Invalid Data", "data": `${data}` })
    }

    let [user] = await userModel.find({email: loginData.email})
    if (!user) {
        return res.send({ msg: "User is not registered, try to register first" })
    }
    // console.log(loginData, user)
    let validate = bcrypt.compareSync(loginData.password, user.password)
    if (validate === true) {
        const secretkey = "secret@123";
        let data = {
            email: user.email,
            password: user.password
        };
        let token = jwt.sign({ data }, secretkey,{expiresIn:'5m'})
        return res.status(200).send({ msg: 'User loged in successfully', token })
        user = null;
    }
    return res.send({ msg: 'User password doesn\'t match' })
}




const register = async (req, res) => {
    let data = req.body;
    if (!data) {
        return res.status(500).send({ msg: "Invalid Data", "data": `${data}` })
    }
    let [user] = await userModel.find({email: data.email})

    if (user) {
        return res.status(200).send({ msg: "User already exists please try to login" })
    }

    try {
        const saltRounds = 10;
        data.password = bcrypt.hashSync(data.password, saltRounds);
        const dbresponse = await userModel.create(data)
        res.status(200).send({ msg: "User successfully registered", dbresponse });

    } catch (err) {
        res.status(500).send({ msg: "Internal server error!!" })
    }    
}

module.exports = {
    login, register
}