const Category = require("../../models/Category.model")

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id)
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" })
        }
        else {
            return res.status(200).json({ message: "Category deleted successfully" }, deletedCategory)
        }
    }
    catch (err) {
        return res.status(500).json({ message: "Internal server error", error: err.message })
    }
}

module.exports = deleteCategory