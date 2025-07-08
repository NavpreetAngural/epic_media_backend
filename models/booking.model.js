const { model, Schema } = require("mongoose");

const bookingSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending"
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = model("bookings", bookingSchema);
