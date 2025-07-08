const Users = require("../../models/User.model")

const deleteUser = async (req , res ) => {
    try{
        const deletedUser = await Users.findByIdAndDelete(req.params.id);
        if(!deletedUser){
            return res.status(400).json({ msg: "User Not Found" });
        }
        res.status(200).json({
            message: "User Deleted Successfully",
            deletedUser
        });
    }
    catch(err){
        res.status(500).json({ message: "Error While Deleting User", err });
        console.error("Error while deleting user:", err);
    }
}

module.exports = deleteUser;