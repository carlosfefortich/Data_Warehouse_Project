const { Contact } = require('../../db');

const deleteContacts = async (req, res) =>{
    const ids = JSON.parse(req.query.ids);
    try {
        await Contact.destroy({
            where: {
                id: ids
            }
        })
        res.status(200).json({ message: 'Contacts were deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Unable to delete contacts', error: error });
    }
    
}

module.exports = { deleteContacts }