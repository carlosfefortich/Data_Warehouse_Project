const { get } = require('../../components/get');
const { Company, City } = require('../../db');

const getCompanies = (req, res) =>{
    get(Company, City).then((companies)=>{
        if(companies.lenght != 0){
            res.status(200).json({ companies: companies });
        }else{
            res.status(404).json({ message: 'There are no companies at the moment' });
        }
        
    });
}

module.exports = { getCompanies };