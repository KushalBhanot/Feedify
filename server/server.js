const TweetSchema = require('./model/tweetData');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

let port = 3002 || process.env.PORT

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://KushalBhanot:test123@cluster0.pxyo0.mongodb.net/tweetDB', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Database is connected!');
}).catch((error) => {
    console.log(error);
})

app.listen(port, error => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Server is working!');
    }
})

app.get("/:uid/get/tweets", async (req, res) => {
    const userID = req.params.uid;
    const user = await TweetSchema.findOne({ uid: userID })
    if (!user) {
        res.status(500).send("Invalid user!");
    }
    else {
        res.status(200).send(user.tweets);
    }
})

app.post("/:uid/post/tweet", async (req, res) => {
    const tweetData = req.body;
    const userID = req.params.uid;
    let user = await TweetSchema.findOne({ uid: userID });
    if (!user) {
        res.status(500).send("Invalid user!");
    }
    else {
        user.tweets.push(tweetData);
        user.save();
        res.status(200).send(user);
    }
})

app.post("/add/user", async (req, res) => {
    console.log(req.body);

    const userData = req.body;
    await TweetSchema.create(userData, (error, data) => {
        if (error) {
            res.status(500).send(error);
        }
        else {
            res.status(200).send(data);
        }
    })
})