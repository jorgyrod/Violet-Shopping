const { Item } = require("../../db");

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, descuento, cantidad, disponible } = req.body;

    const update = await Item.update(
      { nombre, precio, descuento, cantidad, disponible },
      { where: { id } }
    );
    if (update === 1) {
      const updateItem = await Item.findByPk(id);
      res.json(updateItem);
    } else {
      res.json("No se actualizo los datos");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateItem;
