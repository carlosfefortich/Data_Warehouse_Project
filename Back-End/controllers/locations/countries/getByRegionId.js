const { Country } = require('../../../db' );

const getByRegionId = async(req, res) =>{
    const id = req.params.regionId;
    const countries = await Country.findAll({
        where: {
            regionId: id
        }
    })

    if(countries.length != 0){
        res.status(200).json({ countries: countries })
    }else{
        res.status(404).json({ message: 'There are currently no countries with that region' });
    }
}

module.exports = { getByRegionId }