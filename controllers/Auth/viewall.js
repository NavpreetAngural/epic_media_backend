const User = require('../../models/User.model');

const viewAll = async (req, res) => {
    try {
        const data = await User.find();

        res.status(200).json({
            msg: "Users retrieved successfully",
            data
        });
    } catch (err) {
        console.error("Error fetching Users:", err);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
};

module.exports = viewAll;
