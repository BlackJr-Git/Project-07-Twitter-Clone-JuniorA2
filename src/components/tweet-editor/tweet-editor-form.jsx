import { useState } from "react";
import { TweetEditorInput , Tweets } from "..";
import { TweetEditorButtons } from "..";
import { addTweet } from "../../utils/add-tweet";
import TweetContext from "../../contexts/tweet-contexts";
import { useContext } from "react";

function TweetEditorForm({}) {
  const {data , updateTweetData} = useContext(TweetContext) 
  
  const [tweet , setTweet] = useState('')
  // const [tweets , setTweets] = useState(data) 
  
  const handleClick = (e) => {
    e.preventDefault() ;
    let tweetAdded = addTweet(data, tweet) 
    updateTweetData([tweetAdded ,...data ]) ;  
    setTweet("")
  }

  const handleMessageChange = (e) => {
    setTweet(e.target.value) 
  }

  return (
    <div className="tweet-editor-form">
      <TweetEditorInput getTweetText={handleMessageChange} />
      <TweetEditorButtons handleClick={handleClick} />
    </div>
  );
}

export default TweetEditorForm ; 
