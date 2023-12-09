import { TweetAvatar, TweetContent } from "..";

function Tweet({
  tweetData
}) {
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
        react={tweetData.react}
      />
    </div>
  );
}

export default Tweet;
