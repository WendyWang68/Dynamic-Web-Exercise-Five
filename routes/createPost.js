// Create a post
const express = require("express");
const router = express.Router();
//Initialize Firestore Database
const firestore = require("firebase/firestore");
//Create a reference to the database
const db = firestore.getFirestore();

const submitForm = `
    <form action="/create/submit">
      <label>Title
        <input type="text" name="postTitle" />
      </label>
      <label>Text
        <input type="text" name="postText" />
      </label>
      <label>Author
        <input type="text" name="author" />
      </label>
      <button type="submit">Submit</button>
    </form>
`;

router.get("/", (req, res) => {
    res.send(submitForm);
});

router.get("/submit", (req, res) => {
  const queryParams = req.query; //Query params from URL
  const title = queryParams.postTitle;
  const text = queryParams.postText;
  const author = queryParams.author;
  //Create Dynamic ID
  const id = title.replace(/\s+/g, "-").toLowerCase();
  //Submit post to Firebase
  const setBlogPost = firestore.setDoc(
    firestore.doc(db, "posts", id),
    {
      postTitle: title,
      postText: text,
      author: author,
    });

  setBlogPost
    .then(() => {
      //If successful send correct message
      res.send(`
      <h1>thanks</h1>
      <p><a href="/create">Submit another post</a?.</p>
      `);
    })
    .catch((error) => {
      //If failure send correct message
      console.warn(error);
      res.send('Error Submittina: ${error.toString()}');
    })
});

module.exports = router;