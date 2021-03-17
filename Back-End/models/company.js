module.exports = (sequelize, type) =>{
    return sequelize.define('company', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: type.STRING,
            unique: true
        },
        address: {
            type: type.STRING,
        },
        email: {
            type: type.STRING,
            unique: true
        },
        phone: {
            type: type.STRING
        }
    },
    { timestamps: false }
    )
}