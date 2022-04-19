require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//Establecemos la conexion con la base de datos
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

//Ahora Leemos todos los archivos de la carpeta Models, los requerimos y agregamos
//al arreglo modelDefiners
const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

//Ahora Injectamos la conexion (instancia de sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
    Category,
    Color,
    Photo,
    Gender,
    Item,
    Brand,
    Size,
    Clothing } = sequelize.models;

// Aca vendrian las relaciones

//Item - Foto -> 1 : N
Item.hasMany(Photo);
Photo.belongsTo(Item);
//Item - Marca -> 1 : N
Brand.hasMany(Item);
Item.belongsTo(Brand);
//Item - Color -> N : N
Item.belongsToMany(Color, {through: "item_color"});
Color.belongsToMany(Item, {through: "item_color"});
//Item - Genero -> 1 : N
Gender.hasMany(Item);
Item.belongsTo(Gender);
//Item - Talla -> N : N
Item.belongsToMany(Size, {through: "item_size"});
Size.belongsToMany(Item, {through: "item_size"});
//Item - Categoria -> 1 : N
Category.hasMany(Item);
Item.belongsTo(Category);
//Item - Tipo Ropa -> N : N
Item.belongsToMany(Clothing, {through: "item_clothing"});
Clothing.belongsToMany(Item, {through: "item_clothing"});

module.exports = {
    ...sequelize.models,
    conn: sequelize
}