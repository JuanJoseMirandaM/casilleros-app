const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userCtrl.createUser = async (req, res) => {
    try {
        const { username, email, password, rol } = req.body;
        const newUser = new User({ 
            username,
            email,
            password,
            rol
        });
        await newUser.save();
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}

userCtrl.loginUser = async (req,res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({email:email, password:password});
        if (user){
            //let match = await bcript.compare(req.body.password,user.password);
            //if (match){
                //let tokenReturn = await token.encode(user._id);
            res.status(200).json({user});
            //} else{
            //    res.status(404).send({
            //        message: 'Password incorrecto'
            //    });
            //}
        } else {
            res.status(404).send({
                message: 'no existe el usuario'
            });
        }
    } catch(e){
        res.status(500).send({
            message:'Ocurrio un error'
        });
        next(e);
    }
}

module.exports = userCtrl;