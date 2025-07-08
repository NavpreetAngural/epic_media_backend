const Booking = require("../../models/Booking.model");
const sendMail = require("./nodemailStatus");

const updateBooking = async (req, res) => {
  const bookingId = req.params.id;
  const updateData = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updateData, { new: true });

    if (!updatedBooking) {
      return res.status(404).json({ message: "Failed to update booking" });
    }

    // Send email to user
    await sendMail(
      updatedBooking.email,
      `Your Booking is ${updatedBooking.status === "accepted" ? "Confirmed 🎉" : "Rejected"}`,
      `Hi ${updatedBooking.fullName},\n\nYour booking for "${updatedBooking.service}" on ${updatedBooking.date} has been ${updatedBooking.status} by EPIC MEDIA.\n\nThank you!`
    );

    return res.status(200).json({ message: "Booking updated successfully", updatedBooking });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = updateBooking;
