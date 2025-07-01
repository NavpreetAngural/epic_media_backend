const Bookings = require("../../models/booking.model")

const deleteBooking = async (req, res) => {
    try {
        const deletedBooking = await Bookings.findOneAndDelete({ _id: req.params.id })
        if (!deletedBooking) {
            return res.status(400).json({ msg: "Booking Not Found" })
        }
        res.status(200).json({
            message: "Booking Deleted Successfully", deletedBooking
        })
    }
    catch (err) {
        res.status(500).json({ message: "Error While Deleting Booking", err })
    }
}

module.exports = deleteBooking