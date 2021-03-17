const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const CityModel = require('./models/city');
const CountryModel = require('./models/country');
const RegionModel = require('./models/region');
const CompanyModel = require('./models/company');
const ContactModel = require('./models/contact');
const ChannelModel = require('./models/channel');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, 
    {
        dialect: 'mariadb',
        host: process.env.DB_HOST
    }
);

try {
    sequelize.authenticate().then(()=>{
        console.log('Connected to the database successfully!');
    });
} catch (error) {
    console.error('Unable to connect to the database: ', error);
};

const User = UserModel(sequelize, Sequelize);
const City = CityModel(sequelize, Sequelize);
const Country = CountryModel(sequelize, Sequelize);
const Region = RegionModel(sequelize, Sequelize);
const Company = CompanyModel(sequelize, Sequelize);
const Contact = ContactModel(sequelize, Sequelize);
const Channel = ChannelModel(sequelize, Sequelize);

//Associations

Region.hasMany(Country, {
    onDelete: 'CASCADE'
});
Country.belongsTo(Region);

Country.hasMany(City, {
    onDelete: 'CASCADE'
});
City.belongsTo(Country);

City.hasMany(Company);
Company.belongsTo(City);

Company.hasMany(Contact);
Contact.belongsTo(Company);

City.hasMany(Contact);
Contact.belongsTo(City);

Contact.hasMany(Channel);
Channel.belongsTo(Contact);

sequelize.sync({force: false}).then(()=>{
    console.log('Tables synchronized!');
});

//Create the root user

const createRootUser = async ()=>{
    const findRoot = await User.findAll({
        where: {
            email: process.env.INSTANCE_EMAIL
        }
    });
    if(findRoot.length != 0){
        return;
    }else{
        User.create({
            name: process.env.INSTANCE_NAME,
            lastName: process.env.INSTANCE_LASTNAME,
            email: process.env.INSTANCE_EMAIL,
            password: process.env.INSTANCE_PASS,
            role: process.env.INSTANCE_ROLE
        }).then(()=>{
            console.log('Root user created successfully!');
        });
    }
}

createRootUser();


module.exports = {
    User,
    Region,
    Country,
    City,
    Company,
    Contact,
    Channel
}