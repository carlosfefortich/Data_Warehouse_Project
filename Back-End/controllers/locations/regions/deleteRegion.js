const { deleteOne } = require('../../../components/delete');
const { Region } = require('../../../db');

const deleteRegion = (req, res) =>{
    const regionId = req.params.regionId;

    if(regionId){

        deleteOne(regionId, Region, deleteRegion).then(()=>{
            res.status(200).json({message: 'Region successfully deleted'});
        });
        
    }else{
        res.status(400).json({error:'Region ID is required'});
    }
};

module.exports = { deleteRegion };