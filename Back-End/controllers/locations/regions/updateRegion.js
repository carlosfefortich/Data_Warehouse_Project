const { update } = require('../../../components/update');
const { isEmpty } = require('../../../components/isEmpty');
const { Region } = require('../../../db');

const updateRegion = (req, res) =>{
    const regionId = req.params.regionId;
    const updateRegion = req.body;

    if(regionId){

        if(!isEmpty(updateRegion)){
            console.log(updateRegion);
            update(regionId, Region, updateRegion).then(()=>{
                res.status(200).json({message: 'Region successfully updated', newRegion: updateRegion});
            });
        }else{
            res.status(400).json({error:'Name of the new region is required'});
        }
    }else{
        res.status(400).json({error:'Region ID is required'});
    }
}

module.exports = { updateRegion };