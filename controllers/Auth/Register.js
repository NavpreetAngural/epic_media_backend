const User = require("../../models/User.model");
const { registerValidation } = require("../../services/validationSchema")
const bcrypt = require("bcryptjs");
const registerEmail = require("./registerNodemailer");

const Register = async(req, res) => {
    try {
        const registerValues = await registerValidation.validateAsync(req.body)
        console.log(registerValues);
         
        const {fullName , email , password , phone , city } = req.body

        const existUser = await User.findOne({email})

        if(existUser){
            res.status(409).json({
                msg : `${email} Already Exists`,
                success :false 
            })
        }
        else{
            const hashed_password = await bcrypt.hash(password , 10)
            const newUser = new User({
                fullName,
                password : hashed_password,
                email,
                city,
                dp : req.file.filename,
                phone
            })
            await newUser.save()

            try {
                await registerEmail(email, fullName)
            }
            catch (emailerror) {
                console.error("email sending failed", emailerror)
            }

            res.status(200).json({
                msg : `${email} registered Successfullly`,
                success : true,
                data : newUser
            })
        }
    }
    catch (err) {
        console.log(err);

    }
}

module.exports = Register