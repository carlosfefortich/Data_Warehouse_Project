const { get } = require('../../../components/get');
const { Region, Country } = require('../../../db');

const getRegions = (req, res) => {
    get(Region, Country).then((regions)=>{
        if(regions.length != 0){
            res.status(200).json({regions: regions})
        }else{
            res.status(404).json({error: 'There are no regions at the moment'});
        };
    })
    
};

module.exports = { getRegions };