const { Contact, Company, City } = require('../../db');

const getAllContacts = async (req, res)=>{
    const contacts = await Contact.findAll({
        include: [{
                model: Company,
            },
            {
                model: City
            }]
    });

    if(contacts.lenght != 0 ){
        res.status(200).json({ contacts: contacts });
    }else{
        res.status(404).json({ message: 'There are no contacts at the moment' });
    }
}

module.exports = { getAllContacts }