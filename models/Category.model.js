const { model, Schema } = require("mongoose")

const categorySchema = new Schema({
    cName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    media: {
        type: String,
        required: true
    }
})

module.exports = model("categories" , categorySchema)