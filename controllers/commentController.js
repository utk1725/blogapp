const Post = require("../models/postmodel");
const Comment = require("../models/commentmodel");

//business logic

exports.createComment = async (req,res) => {
    try{
        
        //fetch data from req body 
        const {post,user,body}= req.body;
        //create a comment object so that we  can use save function//
        const comment = new Comment({
            post, user,body
        });

        //save the new comment into the database
        const savedComment = await comment.save();

        //find post by ID, add the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} },{new: true} )
                            .populate("comments") //populate the comments array with comment documents
                            .exec();

        res.json({
            post: updatedPost,
        });


    }
    catch(err){
        return res.status(500).json({
            error: "Error while Creating comment" ,
            message: err.message,  // Include the error message
        stack: err.stack, 
        });

    }
};
