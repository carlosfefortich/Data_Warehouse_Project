const jwt = require('jsonwebtoken');

const userTokenAdminValidation = (req, res, next)=>{
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.decode(token);
    if(payload.role === 'admin'){
        next();
    }else{
        res.status(403).json({ error: 'You are not authorized to do that' });
    }
};

module.exports = { userTokenAdminValidation };