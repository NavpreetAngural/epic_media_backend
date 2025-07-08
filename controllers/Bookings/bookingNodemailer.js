const nodemailer = require("nodemailer")
require('dotenv').config()

const bookingEmail = async (email , fullName , date , service , location) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD
            }
        })

        const message = {
            from: process.env.USER,
            to: email,
            cc : process.env.USER ,
            subject: "Booking Added Successfully",
            html: `
            <h2>Welcome!</h2>
                <p>Your Booking has been created successfully. ${fullName}</p>
                <p><strong>Type of Service:</strong> ${service}</p>
                <p><strong>Booking Date:</strong> ${date}</p>
                <p><strong>Location :</strong> ${location}</p>
            `
        }

        await transporter.sendMail(message)
        return { status: true }

        }
    catch(error) {
        return { success: false, error: error.message };
    }
}

module.exports = bookingEmail