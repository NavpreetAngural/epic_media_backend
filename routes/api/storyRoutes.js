const router = require("express").Router()

const addStory = require("../../controllers/StoryIdea/add")
const viewAll = require("../../controllers/StoryIdea/viewAll")
const storyDelete = require("../../controllers/StoryIdea/delete")

router.post('/add' , addStory)
router.get("/viewall", viewAll)
router.delete("/delete/:id", storyDelete)

module.exports = router