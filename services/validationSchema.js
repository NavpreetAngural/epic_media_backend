const Joi = require("joi")

const registerValidation = Joi.object({
    fullName : Joi.string().required() ,
    email : Joi.string().email().required(),
    password : Joi.string().min(8).max(16).required(),
    phone : Joi.number().required(),
    city : Joi.string().required()
})

const contactValidation = Joi.object({
    email : Joi.string().email().required(),
    subject : Joi.string().required(),
    message : Joi.string().required()
})

module.exports = {registerValidation , contactValidation}