const { deleteOne } = require('../../components/delete');
const { User } = require('../../db');

const deleteUser = (req, res) =>{
    const id = req.params.userId;
    
    if(id){

        deleteOne(id, User).then(()=>{
            res.status(200).json({ message: 'User deleted successfully!' });
        }).catch((err)=>{
            res.status(500).json({ message: err });
        })
    }else{
        res.status(400).json({ message: 'Id is required' });
    }  
}

module.exports = { deleteUser }