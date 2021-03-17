const { deleteOne } = require('../../components/delete');
const { Company } = require('../../db');

const deleteCompany = (req, res) =>{
    const companyId = req.params.companyId;

    if(companyId){
        deleteOne(companyId, Company).then(()=>{
            res.status(200).json({ message: 'Company deleted successfully' })
        }).catch((err)=>{
            res.status(500).json({ message: err })
        })
    }else{
        res.status(400).json({ message: 'Company ID is required' });
    }
}

module.exports = { deleteCompany }