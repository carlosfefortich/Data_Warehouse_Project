module.exports = (sequelize, type) => {
    return sequelize.define('contact', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        lastName: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: type.STRING,
            allowNull: false
        },
        position: {
            type: type.STRING,
            allowNull: false
        },
        interest: {
            type: type.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
    )
}