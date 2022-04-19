const {
  Category,
  Color,
  Gender,
  Item,
  Brand,
  Size,
  Clothing,
} = require("../../../db");

const addPhotos = require("./addPhotos.js");

const createItem = async (data) => {
  const {
    nombre,
    idColor,
    idGenero,
    tallaId,
    categoriaId,
    marcaId,
    tipoId,
    fotos,
    precio,
    descuento,
    cantidad,
    disponible,
  } = data;

  const newItem = await Item.create({
    nombre,
    precio,
    descuento,
    cantidad,
    disponible,
  });

  //Agregamos las fotos al item
  addPhotos(fotos, newItem);

  //Buscamos las relaciones, y si existen se agregan

  //Genero
  const gender = await Gender.findByPk(idGenero);
  await gender.addItem(newItem);
  //Marca
  const brand = await Brand.findByPk(marcaId);
  await brand.addItem(newItem);
  //Categoria
  const category = await Category.findByPk(categoriaId);
  await category.addItem(newItem);
  //Color
  await Promise.all(
    idColor.map(async (color) => {
      const content = await Color.findByPk(color);
      await newItem.addColor(content);
    })
  );
  //Talla
  await Promise.all(
    tallaId.map(async (talla) => {
      const content = await Size.findByPk(talla);
      await newItem.addSize(content);
    })
  );
  //Tipo de Ropa
  await Promise.all(
    tipoId.map(async (tipo) => {
      const content = await Clothing.findByPk(tipo);
      await newItem.addClothing(content);
    })
  );

  return { ...newItem.toJSON() };
};

module.exports = createItem;
