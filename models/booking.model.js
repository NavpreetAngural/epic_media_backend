const { model, Schema } = require("mongoose")

const bookingSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    fullName: {
        type: String,
        require: true
    },
    service: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    }
})

module.exports = model("bookings" , bookingSchema)