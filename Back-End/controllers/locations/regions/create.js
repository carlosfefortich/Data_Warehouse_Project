const { create } = require('../../../components/create');
const { Region } = require('../../../db');

const createRegion = (req, res) => {
    const newRegion = req.body;
    create(Region, newRegion).then((region)=>{
      res.status(200).json({ message:'Region created successfully', region: region});  
    }).catch((err)=>{
        res.status(500).json({ error: err });
    })
    
}

module.exports = { createRegion };