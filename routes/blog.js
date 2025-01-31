const express = require("express");
const router = express.Router();

//import Controller
const {dummyLink, likePost, unlikePost} = require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");
const {createPost} = require("../controllers/PostController");
const {getAllPosts} = require("../controllers/PostController");


//Mapping Create 
router.get("/dummyroute",dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

//export
module.exports = router;

