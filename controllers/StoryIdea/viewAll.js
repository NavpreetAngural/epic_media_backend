const Story = require("../../models/StoryIdea.model");
const viewall = async (req, res) => {
    try {
        const data = await Story.find()
        res.status(200).json({
            msg: "All stories fetched successfully",
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