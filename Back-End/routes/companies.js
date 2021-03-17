const router = require('express').Router();

const { createCompany } = require('../controllers/companies/create');
const { getCompanies } = require('../controllers/companies/get');
const { updateCompany } = require('../controllers/companies/update');
const { deleteCompany } = require('../controllers/companies/delete');
const { userTokenValidation } = require('../middlewares/userTokenValidation');

router.post('/create', userTokenValidation, createCompany);
router.get('/', userTokenValidation, getCompanies);
router.put('/update/:companyId', userTokenValidation, updateCompany);
router.delete('/delete/:companyId', userTokenValidation, deleteCompany);

module.exports = router;