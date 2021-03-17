const {User} = require('../../db');

const userCreationDataValidation = async (req, res, next)=>{
    const userInfo = await User.findAll({ where: { email: req.body.email }});
    console.log(userInfo);

    if(userInfo.length === 0){
        next();
    }else{
        res.status(403).json({error: 'Email or username already in use'});
    }; 

};


module.exports = { userCreationDataValidation };