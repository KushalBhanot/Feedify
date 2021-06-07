import './TweetFilter.css';

function TweetFilter(props) {
    const dropdownChangeHandler = (event) => {
        console.log("Dropdown value changed");
        props.onChangeFilter(event.target.value);
    };

    let tags = new Array();
    tags = props.tweets_array.slice(0).reverse().map((tweet, index) => tags[index] = tweet.tag_name)
    console.log(tags);

    let unique_tags = [...new Set(tags)]


    return (
        <div className="tweetFilter__controls">
            <label>Filter by tag</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                {unique_tags.map((tag, index) => {
                    return (
                        <option key={index} value={tag}>{tag}</option>
                    );
                })}
            </select>
        </div>
    );
}

export default TweetFilter;