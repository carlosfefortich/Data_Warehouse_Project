const { User } = require('../../db');

const createUser = async (req, res)=>{
    const newUser = req.body;
    if(newUser.role === 'admin' || newUser.role === 'client'){
        const user = await User.create(newUser);
        res.status(200).json({ message: 'User created successfully!', user: user });
    }else{
        res.status(400).json({ error: 'role property must be admin or client' });
    }
};

module.exports = { createUser };