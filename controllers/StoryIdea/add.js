const Story = require("../../models/StoryIdea.model")

const add = async(req , res ) => {
    try{
        const {fullName , email , phone , idea} = req.body

        const newStory = new Story({
            fullName,
            email,
            phone,
            idea
        })

        await newStory.save()

        res.status(200).json({
            msg : `${fullName} Thanks for Giving your Idea`,
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            err,
            msg : "Failed to sent Idea"
        })
    }
}

module.exports = add