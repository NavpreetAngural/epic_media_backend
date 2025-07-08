const Category = require("../../models/Category.model")

const updateCategory = async (req, res) => {
    const updateData = req.body;

    if (req.file) {
            updateData.image = req.file.filename;
        }
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Failed to update Category" });
        }
        return res.status(200).json({ message: "Category updated successfully", updatedCategory });
    } catch (error) {
        return res.status(400).json({ error });
    }
}
module.exports = updateCategory;