const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("todos", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        completion: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
    });

    Todo.associate = (models) => {
        Todo.belongsTo(models.users, {
            foreignKey: {
                field: 'user_id',
                allowNull: false,
            },
        });
    };

    return Todo;
}