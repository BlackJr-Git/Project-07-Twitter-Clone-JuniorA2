import { TweetAvatar, TweetContent, Loading } from "..";
import { useState, useEffect } from "react";
import { numberFormatter } from "../../utils/number-formatter";
import fetchUserData from "../../utils/fetch-user-data";
import dateFormatter from "../../utils/date-formatter";

function Tweet({ tweetData }) {
  const [like, setlike] = useState(numberFormatter(tweetData.favoriteCount));
  const [retweet, setretweet] = useState(
    numberFormatter(tweetData.retweetCount)
  );
  const [likeIcone, setLikeIcon] = useState(tweetData.likeIcone);

  const [userData, setUserData] = useState({});
  const tweetUserData = `http://localhost:3000/api/user/${tweetData.author}`;

  const [isLoading, setIsLoading] = useState(false);

  function toggleLike() {
    if (tweetData.isLiked == false) {
      tweetData.react = tweetData.react + 1;
      tweetData.isLiked = true;
      tweetData.likeIcone = "heart";
      setLikeIcon("heart");
      return tweetData.react;
    } else {
      tweetData.react = tweetData.react - 1;
      tweetData.isLiked = false;
      tweetData.likeIcone = "heart-outline";
      setLikeIcon("heart-outline");
      return tweetData.react;
    }
  }

  function toggleRetweet() {
    if (tweetData.isRetweet == false) {
      tweetData.retweet = tweetData.retweet + 1;
      tweetData.isRetweet = true;
      return tweetData.retweet;
    } else {
      tweetData.retweet = tweetData.retweet - 1;
      tweetData.isRetweet = false;
      return tweetData.retweet;
    }
  }

  const incrementLike = () => {
    let formatedNumber = numberFormatter(toggleLike());
    setlike(formatedNumber);
  };
  const incrementRetweet = () => {
    setretweet(toggleRetweet());
  };

  useEffect(() => {
    const loadUserData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchUserData(tweetUserData);
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // setIsFailed(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  return (
    <div className="tweet">
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TweetAvatar
            tweetData={userData.id}
            imgSrc={userData.profilePicture}
          />
          <TweetContent
            imgSrc={tweetData.media[0]}
            texte={tweetData.text}
            author={userData.name}
            userName={userData.handle}
            time={dateFormatter(tweetData.createdAt)}
            reply={numberFormatter(tweetData.repliesCount)}
            retweet={retweet}
            react={like}
            addReactCount={incrementLike}
            addRetweetCount={incrementRetweet}
            iconType={likeIcone}
          />
        </>
      )}{" "}
    </div>
  );
}

export default Tweet;
