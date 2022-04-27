const {
  Category,
  Color,
  Photo,
  Gender,
  Item,
  Brand,
  Size,
  Clothing,
} = require("../../../db");

const getItems = async (condicion) => {
  const items = await Item.findAll({
    ...condicion,
    attributes: [
      "id",
      "nombre",
      "precio",
      "descuento",
      "cantidad",
      "disponible",
    ],
    include: [
      {
        model: Photo,
        attributes: ["url"],
        separate: true,
        order: [["id", "ASC"]],
      },
      {
        model: Color,
        attributes: ["color"],
        through: {
          attributes: [],
        },
      },
      {
        model: Category,
        attributes: ["categoria"],
      },
      {
        model: Gender,
        attributes: ["genero"],
      },
      {
        model: Brand,
        attributes: ["marca"],
      },
      {
        model: Size,
        attributes: ["talla"],
        through: {
          attributes: [],
        },
      },
      {
        model: Clothing,
        attributes: ["tipo"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  return items;
};

module.exports = getItems;
