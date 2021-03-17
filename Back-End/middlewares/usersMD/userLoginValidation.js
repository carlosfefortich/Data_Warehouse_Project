const userLoginValidation = (req, res, next)=>{
    const user = req.body;
    console.log(user);
    if(!user.email){
        res.status(400).json({error: 'Email is required'});
    }else if(!user.password){
        res.status(400).json({error: 'Password is required'});
    }else{
        next();
    }
};

module.exports = { userLoginValidation };