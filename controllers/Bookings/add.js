const User = require("../../models/User.model");
const Booking = require("../../models/booking.model");
const bookingEmail = require("./bookingNodemailer");

const add = async (req, res) => {
    try {
        const { fullName, email, location, service, date , status } = req.body;

        const existsUser = await User.findOne({ email });

        if (!existsUser) {
            return res.status(401).json({ msg: "Please Register First" });
        }

        const newBooking = new Booking({
            fullName,
            email,
            location,
            service,
            status, // or remove this line if not needed
            date,
        });

        await newBooking.save();

        try {
            await bookingEmail(email, fullName, date, service, location);
            console.log("email sent");
        } catch (emailerror) {
            console.error("email sending failed", emailerror);
        }

        res.status(200).json({ msg: "Booking Added Successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Failed to Add Booking" });
    }
};

module.exports = add;
