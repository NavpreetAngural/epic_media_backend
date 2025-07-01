const nodemailer = require("nodemailer")
require('dotenv').config()

const registerEmail = async (email, fullName) => {
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
            <p><strong>Your Account has been created successfully</strong>${email}</p>
                <p><strong>Full Name :</strong> ${fullName}</p>
                `
        }

        await transporter.sendMail(message)
        return { status: true }

    }
    catch (error) {
        return { success: false, error: error.message };
    }
}

module.exports = registerEmail