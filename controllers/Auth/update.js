const Users = require("../../models/User.model")


const updateUser = async (req, res) => {
    
    const updateData = req.body
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, updateData, { new: true })
        if (!updatedUser) {
            return res.status(404).json({ message: "failed to update User" })
        }
        return res.status(200).json({ message: "User Updated successfully", updatedUser })
    }
    catch (error) {
        return res.status(400).json({ error })
    }
}

module.exports = updateUser