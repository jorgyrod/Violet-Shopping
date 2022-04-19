const getItems= require("./utils/getItems");

const getAll = async (req,res,next) => {
    try {
        const items = await getItems();
        res.status(200).json(items || []);
    } catch (error) {
        next(error);
    }
}

module.exports = getAll;