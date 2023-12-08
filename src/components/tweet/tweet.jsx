import { TweetAvatar, TweetContent } from "..";

function Tweet({
  tweetData
}) {
  return (
    <div className="tweet">
      <TweetAvatar imgSrc={tweetData.tweetAvatarUrl} />
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





// tweetData {id:5,
//         tweetAvatarUrl:'src/images/image12.png',
//         author : "Twitter",
//         userName : "@twitter",
//         time :"Oct 4" ,
//         tweetText:"hello literally everyone",
//         tweetImageUrl:"",
//         Reply : "34K",
//         Rettweet : "247.7K",
//         React : "1.7M",}

export default Tweet;
