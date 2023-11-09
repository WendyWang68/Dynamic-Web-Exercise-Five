const express = require("express")
const app = express();
const firebase = require("firebase/app");
// Port
const port = 4000;
// Our configuration information for firebase
const firebaseConfig = {
    apiKey: "AIzaSyCTDhv74vDBr62yblrSR_WHj6OMP-lNKXw",
    authDomain: "exercise-five-web-2023.firebaseapp.com",
    projectId: "exercise-five-web-2023",
    storageBucket: "exercise-five-web-2023.appspot.com",
    messagingSenderId: "1044444730636",
    appId: "1:1044444730636:web:0679d67f0961c842dfa529",
    measurementId: "G-GCXJ2GC71P"
  };
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
//const singlePostRoute = require('./routes/singlePost');
//const createPostRoute = require('./routes/createPost');


app.use("/", indexRoute); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});