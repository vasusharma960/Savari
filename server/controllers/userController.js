const User = require('../models/usersModel.js');
const bcrypt = require('bcrypt');

const findUser = async (username) => {

    try {
        const user = await User.findOne({ username });
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (err) {
        return 'Error occurred while sending data to DB';
    }
}

exports.registerUser = async (req, res) => {
    const { name, username, password } = req.body;

    try {
        const user = await findUser(username);
        const hashed = await bcrypt.hash(req.body.password, 10);
        console.log(hashed);

        if (user) {
            return res.status(409).send('User already registered');
        } else {
            const hashedPwd = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({name, username, password: hashedPwd});
            await newUser.save();
            res.status(200).send('New User Registered Successfully');
        }
    }catch(err){
        return res.status(400).json(err);
    }
}

exports.getUser = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await findUser(username);

        if (user) {
            const comparePwd = await bcrypt.compare(password, user.password);
            if (user.username === username && comparePwd) {
                res.status(200).send({id: user._id, message: "Login Successful"});
            } else {
                res.status(401).send('Invalid Username or Password');
            }
        }else{
            return res.status(400).send('User Not Registered');
        }
    } catch (err) {
        return res.status(400).json(err);
    }
}