const Category = require("../../models/Category.model");

const typewise = async (req, res) => {
    const categoryType = req.params.cName;

    try {
        const typeData = await Category.find({
            cName: { $regex: new RegExp(`^${categoryType}$`, 'i') }
        });

        if (typeData.length > 0) {
            res.status(200).json({
                msg: "Category-wise data fetched",
                data: typeData
            });
        } else {
            res.status(404).json({
                msg: "No category found with this name"
            });
        }
    } catch (err) {
        res.status(500).json({
            msg: "Failed to load category-wise data",
            err
        });
    }
};

module.exports = typewise;
