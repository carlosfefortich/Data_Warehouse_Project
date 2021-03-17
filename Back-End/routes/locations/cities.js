const router = require('express').Router();

const { createCity } = require('../../controllers/locations/cities/createCity');
const { getCities } = require('../../controllers/locations/cities/getCities');
const { getByCountryId } = require('../../controllers/locations/cities/getByCountryId');
const { updateCity } = require('../../controllers/locations/cities/updateCity');
const { deleteCity } = require('../../controllers/locations/cities/deleteCity');
const { userTokenValidation } = require('../../middlewares/userTokenValidation');

router.post('/create', userTokenValidation,createCity);
router.get('/', userTokenValidation, getCities);
router.get('/:countryId', userTokenValidation, getByCountryId);
router.put('/update/:cityId', userTokenValidation, updateCity);
router.delete('/delete/:cityId', userTokenValidation, deleteCity);

module.exports = router;