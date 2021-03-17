const { update } = require('../../components/update');
const { Company } = require('../../db');
const { isEmpty } = require('../../components/isEmpty')

const updateCompany = (req, res) =>{
    const companyId = req.params.companyId;
    const updateCompany = req.body;

    if(companyId){

        if(!isEmpty(updateCompany)){
            update(companyId, Company, updateCompany).then(()=>{
                res.status(200).json({ message: 'Company updated succesfully', updatedCompany: updateCompany });
            }).catch((err)=>{
                res.status(500).json({ message: err })
            })
        }else{
            res.status(400).json({ message: 'All the information is required' });
        }
    }else{
        res.status(400).json({ message: 'Company ID is required' });
    }
}

module.exports = { updateCompany };