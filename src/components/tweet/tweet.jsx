import { TweetAvatar, TweetContent, Loading } from "..";
import { useState, useEffect, useContext } from "react";
import { numberFormatter } from "../../utils/number-formatter";
import fetchUserData from "../../utils/fetch-user-data";
import dateFormatter from "../../utils/date-formatter";
import UserContext from "../../contexts/user-context";

function Tweet({ tweetData }) {
  const [userData, setUserData] = useState({});
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const [like, setlike] = useState(numberFormatter(tweetData.favoriteCount));
  const [retweet, setretweet] = useState(
    numberFormatter(tweetData.retweetCount)
  );
  const [likeIcone, setLikeIcon] = useState("heart-outline");

  const tweetUserData = `https://twitter-api-6zi0.onrender.com/api/user/${tweetData.author}`;

  function toggleLike() {
    if (currentUser.likedTweetIds.includes(tweetData.id)) {
      tweetData.favoriteCount = tweetData.favoriteCount - 1;
      currentUser.likedTweetIds = currentUser.likedTweetIds.filter(
        (tweetId) => tweetId !== tweetData.id
      );
      currentUser.likedTweetIds.pop();
      setLikeIcon("heart-outline");
      let formatedLike = numberFormatter(tweetData.favoriteCount);
      setlike(formatedLike);
      return formatedLike;
    } else {
      tweetData.favoriteCount = tweetData.favoriteCount + 1;
      currentUser.likedTweetIds.push(tweetData.id);
      setLikeIcon("heart");
      let formatedLike = numberFormatter(tweetData.favoriteCount);
      setlike(formatedLike);
      return formatedLike;
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

    if (currentUser.likedTweetIds.includes(tweetData.id)) {
      setLikeIcon("heart");
    }

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
            tweetData={userData.handle}
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
            addReactCount={toggleLike}
            addRetweetCount={incrementRetweet}
            iconType={likeIcone}
          />
        </>
      )}{" "}
    </div>
  );
}

export default Tweet;
