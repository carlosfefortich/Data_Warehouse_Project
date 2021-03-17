const { City } = require('../../../db');

const getByCountryId = async(req, res) =>{
    const id = req.params.countryId;
    const cities = await City.findAll({
        where:{
            countryId: id
        }
    })

    if(cities.lenght != 0){
        res.status(200).json({ cities: cities })
    }else{
        res.status(404).json({ message: 'There are no cities on that region' });
    }
}

module.exports = { getByCountryId }