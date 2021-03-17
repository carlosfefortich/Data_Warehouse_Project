const jwt = require('jsonwebtoken');

const userTokenValidation = (req, res, next)=>{
    if(req.headers.authorization){
        try {
            const token = req.headers.authorization.split(' ')[1];
            console.log(token);
            const payload = jwt.verify(token, process.env.SECRET_KEY);
            if(payload){
                next();
            };
        }catch (error) {
            console.error(error)
            res.status(401).json({ error: 'Token is not valid' });
        };
    }else{
        res.status(401).json({ error: 'Please, send the token' });
    }
    

};

module.exports = { userTokenValidation };