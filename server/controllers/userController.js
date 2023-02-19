const User = require('../models/usersModel.js');

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
    const { username } = req.body;

    try {
        const user = await findUser(username);

        if (user) {
            return res.status(409).send('User already registered');
        } else {
            const newUser = new User(req.body);
            await newUser.save();
            res.status(200).send('New User Registered Successfully');
        }
    }catch(err){
        return res.status(400).json(err);
    }
}

exports.getUser = async (req, res) => {
    const {username, password} = req.body;
    //console.log(req.body);

    try {
        //const user = await User.findOne({username, password});
        const user = await findUser(username);
        console.log(user);

        if (user) {
            if (user.username === username && user.password === password) {
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