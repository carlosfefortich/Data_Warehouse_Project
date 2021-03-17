const { update } = require('../../../components/update');
const { Country } = require('../../../db');
const { isEmpty } = require('../../../components/isEmpty');

const updateCountry = (req, res) =>{
    const countryId = req.params.countryId;
    const updateCountry = req.body;

    if(countryId){

        if(!isEmpty(updateCountry)){

            update(countryId, Country, updateCountry).then(()=>{
                res.status(200).json({message: 'Country successfully updated', newCountry: updateCountry});
            });
        }else{
            res.status(400).json({error:'Name of the new country is required'});
        }
    }else{
        res.status(400).json({error:'Country ID is required'});
    }
}

module.exports = { updateCountry };