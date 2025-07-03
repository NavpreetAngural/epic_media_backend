const {Schema , model} = require("mongoose");

const portfolioSchema = new Schema({
    image : {
        required : true,
        type : String
    },
    orientation : {
        type : String,
        required : true
    },
})

module.exports = model("portfolios" , portfolioSchema);     