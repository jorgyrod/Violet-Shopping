const createItem = require("./utils/createItem.js");

const add = async (req, res, next) => {
  createItem(req.body)
    .then((item) => res.status(201).json(item))
    .catch((err) => next(err));
};

module.exports = add;
