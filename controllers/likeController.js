//import models
const Post = require("../models/postmodel");
const Like = require("../models/likemodel");

//like a post
exports.likePost = async (req,res) => {
    try{
        const {post,user}= req.body
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //update the post collection base on this
        const updatePost = await Post.findByIdAndUpdate(post, {$push:{likes: savedLike._id} },{new :true});

        res.json({
            post:updatePost,
        });
    }
    catch(errpr){
        return res.status(400).json({
            error: "error while fetching post,"
        });
        

    }
}

//unlike a post
exports.unlikePost = async (req,res) => {
    try{
       const{post, like} = req.body;
       //find and delete for like collection 
       const deleteLike = await Like.findOneAndDelete({post:post, _id:like});

       //update the post collection
       const updatedPost = await Post.findByIdAndDelete(post, {$pull: {likes: deleteLike._id}} , {new: true});

       res.json({
        post:updatePost,

       })
        
       
    }
    catch(errpr){
        return res.status(400).json({
            error: "error while fetching post,"
        });
    }
        
}


exports.dummyLink = (req,res) => {
    res.send("this is your dummy page");
};