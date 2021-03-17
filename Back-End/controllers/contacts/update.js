const { update } = require('../../components/update');
const { isEmpty } = require('../../components/isEmpty');
const { Contact } = require('../../db');

const updateContact = (req, res) =>{
    const contactId = req.params.contactId;
    const updateContact = req.body;

    if(contactId){

        if(!isEmpty(updateContact)){
            update(contactId, Contact, updateContact).then(()=>{
                res.status(200).json({ message: 'Contact updated successfully', updatedContact: updateContact });
            }).catch((err)=>{
                res.status(500).json({ message: err });
            });
        }
    }
}

module.exports = { updateContact }