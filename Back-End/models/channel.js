module.exports = (sequelize, type)=>{
    return sequelize.define('channel', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        phone: {
            type: type.STRING,
            allowNull: true
        },
        whatsapp: {
            type: type.STRING,
            allowNull: true
        },
        instagram: {
            type: type.STRING,
            allowNull: true
        },
        facebook: {
            type: type.STRING,
            allowNull: true
        },
        linkedin: {
            type: type.STRING,
            allowNull: true
        }
    },
    { timestamps: false }
    )
}