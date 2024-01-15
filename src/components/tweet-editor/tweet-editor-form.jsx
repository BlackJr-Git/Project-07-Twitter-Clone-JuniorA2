import { useState } from "react";
import { TweetEditorInput } from "..";
import { TweetEditorButtons } from "..";
import { bradleyAvatar } from "../../images";
import { tweetData } from "../../utils/tweet-data";
import { addTweet } from "../../utils/add-tweet";

function TweetEditorForm({}) {
  
  const [tweet , setTweet] = useState('')
  const [tweets , setTweets] = useState(tweetData)
  
  const handleClick = (e) => {
    e.preventDefault() ;
    addTweet(tweetData, tweet)
    setTweets(tweetData)
    console.log(tweetData);
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

export default TweetEditorForm;
