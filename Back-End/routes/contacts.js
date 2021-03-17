const router = require('express').Router();

const { createContact } = require('../controllers/contacts/create');
const { searchBar } = require('../controllers/contacts/searchBar');
const { getAllContacts } = require('../controllers/contacts/getAll');
const { updateContact } = require('../controllers/contacts/update');
const { deleteContacts } = require('../controllers/contacts/delete');
const { userTokenValidation } = require('../middlewares/userTokenValidation');

router.post('/create', userTokenValidation, createContact);
router.get('/', userTokenValidation, getAllContacts);
router.post('/search', userTokenValidation, searchBar);
router.put('/update/:contactId', userTokenValidation, updateContact);
router.delete('/delete', userTokenValidation, deleteContacts);

module.exports = router;