const router = require('express').Router();
const { createUser } = require('../controllers/users/createUser');
const { login } = require('../controllers/users/login');
const { updateUser } = require('../controllers/users/updateUser');
const { deleteUser } = require('../controllers/users/deleteUser');
const { getUsers } = require('../controllers/users/getUsers');
const { userLoginValidation } = require('../middlewares/usersMD/userLoginValidation');
const { userCreationValidation } = require('../middlewares/usersMD/userCreationValidation');
const { userCreationDataValidation } = require('../middlewares/usersMD/userCreationDataValidation');
const { userTokenAdminValidation } = require('../middlewares/userTokenAdminValidation');
const { userTokenValidation } = require('../middlewares/userTokenValidation');

router.post('/register',userTokenValidation,userTokenAdminValidation,userCreationValidation,userCreationDataValidation, createUser);
router.post('/login', userLoginValidation,login);
router.put('/update/:userId', userTokenValidation, userTokenAdminValidation, updateUser);
router.delete('/delete/:userId', userTokenValidation, userTokenAdminValidation, deleteUser);
router.get('/', userTokenValidation, userTokenAdminValidation, getUsers);

module.exports = router;