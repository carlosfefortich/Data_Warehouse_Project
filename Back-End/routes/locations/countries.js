const router = require('express').Router();
const { createCountry } = require('../../controllers/locations/countries/createCountry');
const { getCountries } = require('../../controllers/locations/countries/getCountries');
const { getByRegionId } = require('../../controllers/locations/countries/getByRegionId');
const { updateCountry } = require('../../controllers/locations/countries/updateCountry');
const { deleteCountry } = require('../../controllers/locations/countries/deleteCountry');
const { userTokenValidation } = require('../../middlewares/userTokenValidation');

router.post('/create', userTokenValidation, createCountry);
router.get('/', userTokenValidation, getCountries);
router.get('/:regionId', userTokenValidation, getByRegionId);
router.put('/update/:countryId', userTokenValidation, updateCountry);
router.delete('/delete/:countryId', userTokenValidation, deleteCountry);

module.exports = router;