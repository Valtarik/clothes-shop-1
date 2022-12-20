import sequelize from "../db.js"
import {DataTypes} from "sequelize"

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    activationLink: {type: DataTypes.STRING},
    restoreLink: {type: DataTypes.STRING},
})

const Token = sequelize.define('token', {
    refreshToken: {type: DataTypes.STRING, required: true},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    discount: {type: DataTypes.INTEGER, allowNull: false}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const ProductInfo = sequelize.define('product_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.TEXT, allowNull: false},
    colors: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
    sizes: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
})

const Size = sequelize.define('size', {
    name: {type: DataTypes.STRING, allowNull: false},
    chest: {type: DataTypes.INTEGER, allowNull: false},
    waist: {type: DataTypes.INTEGER, allowNull: false},
    hips: {type: DataTypes.INTEGER, allowNull: false},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
    comment: {type: DataTypes.TEXT, allowNull: false},
    totalPrice: {type: DataTypes.INTEGER, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false}
})

const OrderProduct = sequelize.define('order_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER, allowNull: false}
})

User.hasOne(Token)
Token.belongsTo(User, {foreignKey: 'userId'})

Category.hasMany(Product)
Product.belongsTo(Category)

Product.hasMany(ProductInfo, {as: 'info'})
ProductInfo.belongsTo(Product)

ProductInfo.hasOne(Size)
Size.belongsTo(ProductInfo)

Order.hasMany(OrderProduct)
OrderProduct.belongsTo(Order)

Product.hasMany(OrderProduct)
OrderProduct.belongsTo(Product)

export {
    User,
    Token,
    Product,
    Category,
    ProductInfo,
    Size,
    Order,
    OrderProduct,
}