const router = require('express').Router();
const regionsRouter = require('./locations/regions');
const countriesRouter = require('./locations/countries');
const citiesRouter = require('./locations/cities');
const allLocationsRouter = require('./locations/getAll');

router.use('/regions', regionsRouter);
router.use('/countries', countriesRouter);
router.use('/cities', citiesRouter);
router.use('/all', allLocationsRouter);

module.exports = router;