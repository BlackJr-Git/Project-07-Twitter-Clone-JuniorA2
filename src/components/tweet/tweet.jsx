import { TweetAvatar, TweetContent } from "..";
import { useState } from "react";


function Tweet({
  tweetData
}) {
  
  const [like, setlike] = useState(tweetData.react)
  const [retweet, setretweet] = useState(tweetData.retweet)
  const incrementLike = () => {
     setlike(tweetData.incrementLike())
  }
  const incrementRetweet = () => {
    setretweet(tweetData.incrementRetweet())
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
