const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, dropDups: true },
    photoUrl: String,
    uid: { type: String, unique: true, dropDups: true },
    tweets: [{
        tweet_id: String,
        tweet_url: String,
        tag_name: String
    }]
})

module.exports = mongoose.model('TweetSchema', tweetSchema);