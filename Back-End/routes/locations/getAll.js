const router = require('express').Router();
const { Region, Country, City } = require('../../db');
const { userTokenValidation } = require('../../middlewares/userTokenValidation');

router.get('/', userTokenValidation, async (req, res)=>{
    const locations = await Region.findAll({
        include: {
            model: Country,
            include: {
                model: City
            }
        }
    })

    if(locations.lenght != 0){
        res.status(200).json(locations);    
    }else{
        res.status(404).json({ message: 'Currently there are no locations' })
    }

    console.log(JSON.stringify(locations));
    
});

module.exports = router;