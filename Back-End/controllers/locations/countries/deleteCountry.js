const { deleteOne } = require('../../../components/delete');
const { Country } = require('../../../db');

const deleteCountry = (req, res) =>{
    const countryId = req.params.countryId;

    if(countryId){

        deleteOne(countryId, Country, deleteCountry).then(()=>{
            res.status(200).json({message: 'Country successfully deleted'});
        });
        
    }else{
        res.status(400).json({error:'Country ID is required'});
    }
};

module.exports = { deleteCountry };