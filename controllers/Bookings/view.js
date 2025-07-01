const Booking = require('../../models/booking.model');

const view = async (req, res) => {
    const email = req.params.email
  try {
    const bookings = await Booking.find({email});

    res.status(200).json({
      msg: "Bookings retrieved successfully",
      data: bookings
    });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({
      msg: "Internal Server Error"
    });
  }
};

module.exports = view;
