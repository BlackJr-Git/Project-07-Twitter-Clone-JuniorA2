import { TweetAvatar, TweetContent } from "..";
import { useState } from "react";


function Tweet({
  tweetData ,addReactCount
}) {
  
  const [like, setlike] = useState(tweetData.react)
   const incrementLike = () => {
     setlike(tweetData.incrementLike())
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
        retweet={tweetData.retweet}
        react={like}
        addReactCount={incrementLike}
      />
    </div>
  );
}

export default Tweet;
