const { Schema, model } = require("mongoose")

const contactSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
})

module.exports = model("Contact", contactSchema) 