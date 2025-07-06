const { contactValidation } = require("../../services/validationSchema");
const Contact = require("../../models/Contact.model");

const add = async (req , res) => {
    try{
        const contactValues = await contactValidation.validateAsync(req.body);

        const { email, subject, message } = contactValues;

        const newContact = new Contact({
            email,
            subject,
            message
        })

        await newContact.save();

        return res.status(200).json({
            message: "Contact details added successfully",
            data: newContact
        });
    }
    catch(err){
        return res.status(500).json({ message: "Internal Server Error", error: err });
    }
}

module.exports = add;