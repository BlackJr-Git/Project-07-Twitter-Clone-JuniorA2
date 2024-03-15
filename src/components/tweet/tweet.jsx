import { TweetAvatar, TweetContent, Loading } from "..";
import { useState, useEffect, useContext } from "react";
import { numberFormatter } from "../../utils/number-formatter";
import fetchUserData from "../../utils/fetch-user-data";
import dateFormatter from "../../utils/date-formatter";
import UserContext from "../../contexts/user-context";

function Tweet({ tweetData }) {
  const [like, setlike] = useState(numberFormatter(tweetData.favoriteCount));
  const { currentUser } = useContext(UserContext);
  const [retweet, setretweet] = useState(
    numberFormatter(tweetData.retweetCount)
  );
  const [likeIcone, setLikeIcon] = useState("heart-outline");

  const [userData, setUserData] = useState({});
  const tweetUserData = `https://twitter-api-6zi0.onrender.com/api/user/${tweetData.author}`;
  // console.log(tweetData.author);
  const [isLoading, setIsLoading] = useState(false);

  function toggleLike() {
    if (currentUser.likedTweetIds.includes(tweetData.id)) {
      tweetData.favoriteCount = tweetData.favoriteCount - 1;
      // tweetData.isLiked = true;
      // tweetData.likeIcone = "heart";
      setLikeIcon("heart-outline");
      return tweetData.favoriteCount;
    } else {
      tweetData.favoriteCount = tweetData.favoriteCount + 1;
      currentUser.likedTweetIds.push(tweetData.id)
      setLikeIcon("heart");
      return tweetData.favoriteCount;
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
