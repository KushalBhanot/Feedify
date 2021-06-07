import './TweetControls.css';
import { FaEdit } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function TweetControls() {
    return (
        <div className="tweetControl__icons">
            <IconContext.Provider value={{ size: "1.6rem" }}>
                <FaEdit color="#0065a9" />
                &nbsp;&nbsp;&nbsp;
                <FaMinusCircle color="#f70059" />
            </IconContext.Provider>
        </div>
    );
}

export default TweetControls;