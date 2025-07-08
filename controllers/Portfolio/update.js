const Portfolio = require("../../models/Portfolio.model")


const updatePortfolio = async (req, res) => {

    const updateData = req.body
    if (req.file) {
        updateData.image = req.file.filename;
    }
    try {
        const updatedPortfolio = await Portfolio.findByIdAndUpdate(req.params.id, updateData, { new: true })
        if (!updatedPortfolio) {
            return res.status(404).json({ message: "failed to update Portfolio" })
        }
        return res.status(200).json({ message: "Portfolio Updated successfully", updatedPortfolio })
    }
    catch (error) {
        return res.status(400).json({ error })
    }
}

module.exports = updatePortfolio    