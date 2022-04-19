const categorias = require("./data/categorias.json");
const colores = require("./data/colores.json");
const generos = require("./data/generos.json");
const items = require("./data/items.json");
const marcas = require("./data/marcas.json");
const tallas = require("./data/tallas.json");
const tipoRopa = require("./data/tipoRopa.json");

const {
  Category,
  Color,
  Gender,
  Brand,
  Size,
  Clothing,
} = require("../src/db.js");

const createItem = require("../src/controllers/item/utils/createItem");

//Lectura y Registro de Archivos en la BD

const loadMockData = async () => {
  console.log("Loading Mock Data...");

  await Category.bulkCreate(categorias);
  await Color.bulkCreate(colores);
  await Gender.bulkCreate(generos);
  await Brand.bulkCreate(marcas);
  await Size.bulkCreate(tallas);
  await Clothing.bulkCreate(tipoRopa);

  for(let p of items){
    await createItem(p);
  }
};

module.exports = loadMockData;
