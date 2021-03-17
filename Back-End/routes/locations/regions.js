const router = require('express').Router();
const { createRegion } = require('../../controllers/locations/regions/create');
const { getRegions } = require('../../controllers/locations/regions/getRegions');
const { updateRegion } = require('../../controllers/locations/regions/updateRegion');
const { deleteRegion } = require('../../controllers/locations/regions/deleteRegion');
const { userTokenValidation } = require('../../middlewares/userTokenValidation');

router.post('/create', userTokenValidation, createRegion);
router.get('/', userTokenValidation, getRegions);
router.put('/update/:regionId', userTokenValidation, updateRegion);
router.delete('/delete/:regionId', userTokenValidation, deleteRegion);

module.exports = router;