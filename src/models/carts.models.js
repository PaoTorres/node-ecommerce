const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');

/**
 * @openapi
 * components:
 *   schemas:
 *     addProduct:
 *       type: object
 *       properties:
 *         cartId:
 *           type: integer
 *           example: 1
 *         productId:
 *           type: integer
 *           example: 3
 *         quantity:
 *           type: integer
 *           example: 1
 *         price:
 *           type: double
 *           example: 70
 *          
 *     
 */

const Carts = db.define("carts", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
            model: Users,
            key: "id",
        },
    },
    totalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("pending", "purchased"),
        defaultValue: "pending",
    },
});

module.exports = Carts;