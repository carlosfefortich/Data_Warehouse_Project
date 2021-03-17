const { get } = require('../../../components/get');
const { City, Country } = require('../../../db');


const getCities = (req, res) => {
    get(City, Country).then((cities)=>{
        if(cities.length != 0){
            res.status(200).json({cities: cities})
        }else{
            res.status(404).json({message: 'There are no cities at the moment'});
        };
    })
}

module.exports = { getCities };