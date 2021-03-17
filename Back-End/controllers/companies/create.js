const { create } = require('../../components/create');
const { Company } = require('../../db');

const createCompany = (req, res) => {
    const newCompany = req.body;
    create(Company, newCompany).then((company) =>{
        res.status(200).json({ message: 'Company created successfully', company: company})
    })
        
}

module.exports = { createCompany };