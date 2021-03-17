const { update } = require('../../../components/update');
const { City } = require('../../../db');
const { isEmpty } = require('../../../components/isEmpty');

const updateCity = (req, res) =>{
    const cityId = req.params.cityId;
    const updateCity = req.body;

    if(cityId){

        if(!isEmpty(updateCity)){

            update(cityId, City, updateCity).then(()=>{
                res.status(200).json({message: 'City successfully updated', newCountry: updateCity});
            });
        }else{
            res.status(400).json({error:'Name of the new city is required'});
        }
    }else{
        res.status(400).json({error:'City ID is required'});
    }
}

module.exports = { updateCity };