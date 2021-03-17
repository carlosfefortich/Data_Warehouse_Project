const { deleteOne } = require('../../../components/delete');
const { City } = require('../../../db');

const deleteCity = (req, res) =>{
    const cityId = req.params.cityId;

    if(cityId){

        deleteOne(cityId, City).then(()=>{
            res.status(200).json({message: 'City successfully deleted'});
        });
        
    }else{
        res.status(400).json({error:'City ID is required'});
    }
};

module.exports = { deleteCity };