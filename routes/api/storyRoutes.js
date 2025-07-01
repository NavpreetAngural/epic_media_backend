const router = require("express").Router()

const addStory = require("../../controllers/StoryIdea/add")

router.post('/add' , addStory)

module.exports = router