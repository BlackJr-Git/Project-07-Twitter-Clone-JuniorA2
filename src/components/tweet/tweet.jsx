import { TweetAvatar, TweetContent } from "..";
import { useState } from "react";


function Tweet({
  tweetData
}) {
  
  const [like, setlike] = useState(tweetData.react)
  const [retweet, setretweet] = useState(tweetData.retweet)

  function toggleLike() {
    if (tweetData.isLiked == false) {
      tweetData.react = tweetData.react  + 1 
      tweetData.isLiked = true 
      return tweetData.react
    } else {
      tweetData.react = tweetData.react - 1
      tweetData.isLiked = false   
      return tweetData.react
    }
  }

  function toggleRetweet() {
    if (tweetData.isRetweet == false) {
      tweetData.retweet = tweetData.retweet  + 1 
      tweetData.isRetweet = true 
      return tweetData.retweet
    } else {
      tweetData.retweet = tweetData.retweet - 1
      tweetData.isRetweet = false  
      return tweetData.retweet
    }
  }


  
  const incrementLike = () => {
     setlike(toggleLike())
  }
  const incrementRetweet = () => {
    setretweet(toggleRetweet())
 }
  
  return (
    <div className="tweet">
      <TweetAvatar tweetData={tweetData.userName} imgSrc={tweetData.tweetAvatarUrl} />
      <TweetContent
        imgSrc={tweetData.tweetImageUrl}
        texte={tweetData.tweetText}
        author={tweetData.author}
        userName={tweetData.userName}
        time={tweetData.time}
        reply={tweetData.reply}
        retweet={retweet}
        react={like}
        addReactCount={incrementLike}
        addRetweetCount={incrementRetweet}
      />
    </div>
  );
}

export default Tweet;
