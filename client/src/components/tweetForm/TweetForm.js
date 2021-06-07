import { useState } from 'react';

import './TweetForm.css';
import '../UI/InputBox.css';

import Axios from 'axios';

function TweetForm() {
    const uid = localStorage.getItem("user_id");
    const [inputLink, setInputLink] = useState('');
    const [inputTag, setInputTag] = useState('');

    const linkChangeHandler = (event) => {
        setInputLink(event.target.value);
    };

    const tagChangeHandler = (event) => {
        setInputTag(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); //prevents refreshing

        const tweetData = {
            tweet_id: new Date().getTime().toString(),
            tweet_url: inputLink,
            tag_name: inputTag
        };

        console.log(uid);
        Axios.post(`http://localhost:3002/${uid}/post/tweet`, tweetData)
            .then(res => {
                // console.log(res);
                console.log(res.data);
            })
        // console.log(tweetData);

        setInputLink('');
        setInputTag('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="inputBox__controls">
                <h3 className="inputBox__text">Tweet Link:</h3>
                <input type="text"
                    placeholder="Enter a link"
                    required
                    onChange={linkChangeHandler}
                    value={inputLink}
                />
            </div>
            <div className="inputBox__controls">
                <h3 className="inputBox__text">Tag Name:</h3>
                <input type="text"
                    placeholder="Assign a tag"
                    required
                    onChange={tagChangeHandler}
                    value={inputTag}
                />
            </div>
            <div className="tweetLink__button">
                <button type="submit">Add</button>
            </div>
        </form >
    );
}

export default TweetForm;