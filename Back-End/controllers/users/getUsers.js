const { get } = require('../../components/get');
const { User } = require('../../db');

const getUsers = (req, res) =>{
    get(User).then((users)=>{
        if(users.lenght != 0){
            res.status(200).json({ users: users });
        }else{
            res.status(404).json({ message: 'There are currently no users' });
        }
    }).catch(()=>{
        res.status(500).json({ message: "Oops! Internal server error" });
    })
}

module.exports = { getUsers };