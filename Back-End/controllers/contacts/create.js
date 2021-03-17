const { create } = require('../../components/create');
const { Contact } = require('../../db');

const createContact = (req, res) =>{
    const newContact = req.body;

    create(Contact, newContact).then((contact)=>{
        res.status(200).json({ message: 'Contact created successfully', contact: contact });
    }).catch((err)=>{
        res.status(500).json({ message: 'Cannot create contact right now', error: err});
    })
}

module.exports = { createContact };