const { Schema , model } = require ("mongoose")

const storyschema = new Schema({
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    idea : {
        type : String,
        required : true
    },

})

module.exports = model("storyIdea" , storyschema)