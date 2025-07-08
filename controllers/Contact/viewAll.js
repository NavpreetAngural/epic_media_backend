const Query = require("../../models/Contact.model");
const viewall = async (req, res) => {
    try {
        const data = await Query.find()
        res.status(200).json({
            msg: "All Queries fetched successfully",
            data
        })
    }
    catch (err) {
        res.status(500).json({
            msg: "internal server error",
            error: err.message
        })
    }
}

module.exports = viewall