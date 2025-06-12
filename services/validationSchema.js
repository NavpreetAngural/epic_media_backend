const Joi = require("joi")

const registerValidation = Joi.object({
    fullName : Joi.string().required() ,
    email : Joi.string().email().required(),
    password : Joi.string().min(8).max(16).required(),
    phone : Joi.number().required(),
    city : Joi.string().required()
})

module.exports = {registerValidation}