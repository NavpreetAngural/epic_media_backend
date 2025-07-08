const Story = require ("../../models/StoryIdea.model")

const deleteStory = async (req, res) => {
    try {
        const storyId = req.params.id;
        const deletedStory = await Story.findByIdAndDelete(storyId);

        if (!deletedStory) {
            return res.status(404).json({ msg: "Story not found" });
        }

        res.status(200).json({ msg: "Story deleted successfully", deletedStory });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}
module.exports = deleteStory;