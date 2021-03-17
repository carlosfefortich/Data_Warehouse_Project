const { create } = require('../../../components/create');
const { City } = require('../../../db');

const createCity = (req, res) =>{
    const newCity = req.body;
    create(City, newCity).then((city) => {
        res.status(200).json({ message: 'City successfully created!', city: city })
    }).catch((err)=>{
        res.status(500).json({ message: err });
    })
}

module.exports = { createCity };