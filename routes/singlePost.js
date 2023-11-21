//Get a single post
const express = require("express");
const router = express.Router();
//Initialize Firestore Database
const firestore = require("firebase/firestore");
// Create a reference to the database
const db = firestore.getFirestore();

router.get("/:postId", (req, res) => {
    //How do I get a param
    const postId = req.params.postId;
    const postQuery = firestore.getDocs(
        firestore.collection(db, "posts", postId)
    );

    postQuery 
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            res.send(error);
        });
    
    //console.log(postId);
    //res.send("PostId" + postId);
});

module.exports = router;