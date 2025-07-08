const Contact = require("../../models/Contact.model")

const deleteContact = async (req, res) => {
    try{
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);        
        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        else{
            return res.status(200).json({ message: "Contact deleted successfully" });           
        }
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = deleteContact;