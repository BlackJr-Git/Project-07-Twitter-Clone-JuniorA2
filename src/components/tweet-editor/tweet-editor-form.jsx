import { useState } from "react";
import { TweetEditorInput } from "..";
import { TweetEditorButtons } from "..";
import { bradleyAvatar } from "../../images";
import { tweetData } from "../../utils/tweet-data";

function TweetEditorForm({}) {
  const lastTweet = tweetData.length - 1 
  const [tweet , setTweet] = useState('')
  const [tweets , setTweets] = useState(tweetData)
  
  const handleClick = (e) => {
    e.preventDefault() ;""
    let key = tweetData[lastTweet].id + 1
    
    let newTweet = {
      id : key ,
      tweetAvatarUrl: bradleyAvatar,
      author: "Bradley Ortiz",
      userName: "@bradley_",
      time: "1m",
      tweetText: {tweet} ,
      tweetImageUrl: "",
      reply: 0,
      retweet: 0,
      react: 0,
      isLiked : false,
      isRetweet : false,
      // incrementLike : incrementLike,
      // incrementRetweet : incrementRetweet
    } 

    setTweets(tweetData.unshift(newTweet))
    
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
