import './TweetList.css';
import TweetEmbed from 'react-tweet-embed';
import TweetFilter from '../tweetFilter/TweetFilter';
import { useState } from 'react';
import TweetControls from './TweetControls';

function TweetList({ items }) {
    const [filteredTagName, setFilteredTagName] = useState('');

    const filterChangeHandler = (selectedTag) => {
        console.log("Filter tag name has been updated.");
        setFilteredTagName(selectedTag);
    };

    const filteredTweets = items.filter((tweet) => {
        return tweet.tag_name === filteredTagName;
    });

    console.log(filteredTagName);
    console.log(filteredTweets);

    if (items.length === 0) {
        return <p className="noTweet__controls">No tweets to display.</p>;
    }
    else if (items.length === 1) {
        return (
            <div className="tweetList__controls">
                <TweetFilter
                    selected={filteredTagName}
                    onChangeFilter={filterChangeHandler}
                    tweets_array={items}
                />

                <ul>
                    {items.map((tweet) => (
                        <>
                            <h1>{tweet.tag_name}</h1>
                            <div className="tweetDisplay">
                                <TweetEmbed id={tweet.tweet_url.split("/")[5]} />
                                {/* <TweetControls /> */}
                            </div>
                        </>
                    ))}
                </ul>

                <TweetControls />
            </div>
        );
    }
    else {
        return (
            <div className="tweetList__controls">
                <TweetFilter
                    selected={filteredTagName}
                    onChangeFilter={filterChangeHandler}
                    tweets_array={items}
                />

                <ul>
                    {filteredTweets.map((tweet) => (
                        <>
                            <h1>{tweet.tag_name}</h1>
                            <div className="tweetDisplay">
                                <TweetEmbed id={tweet.tweet_url.split("/")[5]} />
                                {/* <TweetControls /> */}
                            </div>
                        </>
                    ))}

                </ul>
            </div>
        );
    }
}

export default TweetList;