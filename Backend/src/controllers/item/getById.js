const getItems = require("./utils/getItems");

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await getItems({ where: { id } });
    res.json(item ? item[0] : {});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getById;
