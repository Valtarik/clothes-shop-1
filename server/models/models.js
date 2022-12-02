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

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProduct = sequelize.define('basket_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
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
    description: {type: DataTypes.STRING, allowNull: false},
    colors: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
    sizes: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
})

const Size = sequelize.define('size', {
    name: {type: DataTypes.STRING, allowNull: false},
    chest: {type: DataTypes.INTEGER, allowNull: false},
    waist: {type: DataTypes.INTEGER, allowNull: false},
    hips: {type: DataTypes.INTEGER, allowNull: false},
})

// const Color = sequelize.define('color', {
//     name: {type: DataTypes.STRING, allowNull: false},
//     shade: {type: DataTypes.INTEGER, allowNull: false},
// })

User.hasOne(Token)
Token.belongsTo(User, {foreignKey: 'userId'})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Category.hasMany(Product)
Product.belongsTo(Category)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(ProductInfo, {as: 'info'})
ProductInfo.belongsTo(Product)

ProductInfo.hasOne(Size)
Size.belongsTo(ProductInfo)

// ProductInfo.hasMany(Color)
// Color.belongsTo(ProductInfo)

export {
    User,
    Token,
    Basket,
    BasketProduct,
    Product,
    Category,
    ProductInfo,
    Size,
}