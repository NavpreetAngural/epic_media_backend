const Category = require("../../models/Category.model")
const view = async (req, res) => {
    try {
        const data = await Category.find()
        res.json({
            data,
            msg : "Category data loaded Successfully "
    })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "failed to load category data",
            err
        })

    }
}

module.exports = view