//import mongoose
const mongoose = require("mongoose");

//route handler
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true,
    },
    body: {
        type: String,
        require:true,
    },
    //array of like
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"like",
    }],
    //array of comment
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"comment",
    }],
})

//export module
module.exports = mongoose.model("post",postSchema);
