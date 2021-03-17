const userCreationValidation = (req, res, next)=>{
    const user = req.body;
    if (!user.name){
        res.status(400).json({error: 'Name is required'});
    }else if (!user.lastName){
        res.status(400).json({error: 'Last name is required'});
    }else if (!user.email){
        res.status(400).json({error: 'Email is required'});
    }else if (!user.password){
        res.status(400).json({error: 'Password is required'});
    }else if (!user.role){
        res.status(400).json({error: 'Role is required'});
    }else{
        next();
    }
};

module.exports = {userCreationValidation};