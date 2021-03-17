const { create } = require('../../../components/create');
const { Country } = require('../../../db');

const createCountry = (req, res) =>{
    const newCountry = req.body;
    create(Country, newCountry).then((country) => {
        res.status(200).json({ message: 'Country successfully created!', country: country })
    }).catch((err)=>{
        res.status(500).json({ message: err });
    })
}

module.exports = { createCountry };