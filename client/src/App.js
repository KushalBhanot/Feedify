import './App.css';
import Navigation from './Navigation';
import TweetForm from './TweetForm';
import Hero from './Hero';
import TweetList from './TweetList';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [tweets, setTweets] = useState([]);
  console.log(tweets);

  const uid = localStorage.getItem("user_id");

  useEffect(() => {
    Axios.get(`http://localhost:3002/${uid}/get/tweets`).then((res) => {
      setTweets(res.data);
    })
  }, []);

  return (
    <div className="main__controls">
      <Navigation />
      <Hero />
      <TweetForm />
      <TweetList items={tweets} />
    </div>
  );
}

export default App;