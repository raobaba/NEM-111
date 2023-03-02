const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    poster : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    }
}, {versionKey : false, timestamps : true});

const movieModel = mongoose.model("movie", movieSchema);
module.exports = movieModel;