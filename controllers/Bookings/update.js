const Boooking = require("../../models/Booking.model")


const updateBooking = async (req, res) => {
    const userId = req.params.id
    const updateData = req.body
    try {
        const updatedBooking = await Boooking.findByIdAndUpdate(userId, updateData, { new: true })
        if (!updatedBooking) {
            return res.status(404).json({ message: "failed to update booking" })
        }
        return res.status(200).json({ message: "Booking Updated successfully", updatedBooking })
    }
    catch (error) {
        return res.status(400).json({ error })
    }
}

module.exports = updateBooking