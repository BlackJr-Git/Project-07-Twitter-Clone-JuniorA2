import { useState } from "react";
import { TweetEditorInput , Tweets } from "..";
import { TweetEditorButtons } from "..";
import { tweetData } from "../../utils/tweet-data";
import { addTweet } from "../../utils/add-tweet";


function TweetEditorForm({}) {
  
  const [tweet , setTweet] = useState('')
  const [tweets , setTweets] = useState(tweetData)
  
  const handleClick = (e) => {
    e.preventDefault() ;
    let tweetAdded = addTweet(tweetData, tweet)
    setTweets([...tweets , tweetAdded ]) ;  
    setTweet("")
  }

  const handleMessageChange = (e) => {
    setTweet(e.target.value) 
  }

    
  return (
    <div className="tweet-editor-form">
      <TweetEditorInput getTweetText={handleMessageChange} />
      <TweetEditorButtons handleClick={handleClick} />
      <Tweets tweetData={tweets} />
    </div>
  );
}

export default TweetEditorForm ; 
