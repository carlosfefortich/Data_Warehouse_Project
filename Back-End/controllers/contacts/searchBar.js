const { Contact, Company, City } = require('../../db');
const { Op } = require("sequelize");

const searchBar = async (req, res) =>{
    const contacts = req.body;

    const result = await Contact.findAll({
        where: {
            [Op.and]: [
                {
                    name: {
                        [Op.like]: `%${contacts.name}%`
                    }
                },
                {
                    lastName: {
                        [Op.like]: `%${contacts.lastName}%`
                    }
                },
                {
                    email: {
                        [Op.like]: `%${contacts.email}%`
                    }
                },
                {
                    companyId: contacts.companyId
                }
            ]
        },
        include: [{
            model: Company,
        },
        {
            model: City
        }]
    })

    if(contacts.lenght != 0 ){
        res.status(200).json({ contacts: result });
    }else{
        res.status(404).json({ message: 'There are no contacts at the moment' });
    }
}

module.exports = { searchBar }