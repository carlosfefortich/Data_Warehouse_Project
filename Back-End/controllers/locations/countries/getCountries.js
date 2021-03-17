const { get } = require('../../../components/get');
const { Region, Country } = require('../../../db');


const getCountries = (req, res) => {
    get(Country, Region).then((countries)=>{
        if(countries.length != 0){
            res.status(200).json({countries: countries})
        }else{
            res.status(404).json({message: 'There are no countries at the moment'});
        };
    })
}

module.exports = { getCountries };