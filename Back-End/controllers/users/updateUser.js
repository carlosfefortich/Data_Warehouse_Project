const { update } = require('../../components/update');
const { isEmpty } = require('../../components/isEmpty');
const { User } = require('../../db');

const updateUser = (req, res) =>{
    const id = req.params.userId;
    const updateUser = req.body;

    if(id){

        if(!isEmpty(updateUser)){
            update(id, User, updateUser).then(()=>{
                res.status(200).json({ message: 'User updated successfully!', updatedUser: updateUser });
            })
        }else{
            res.status(400).json({message: 'Information is required'});
        }
    }else{
        res.status(400).json({message: 'Id is required'});
    }
    
}

module.exports = { updateUser };