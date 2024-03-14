import { Header, ProfileHero, Tweets, ProfileNavbar } from "../components";
import { useParams } from "react-router-dom/dist";
import { useContext, useEffect, useState } from "react";
import TweetContext from "../contexts/tweet-contexts";
import UserContext from "../contexts/user-context";
import Loading from "../components/loading";
import ReloadData from "../components/reload-data";
import fetchUserData from "../utils/fetch-user-data";


function Profile() {
  const { data, isLoading, isFailed } = useContext(TweetContext);
  const { currentUser } = useContext(UserContext);
  const { userName } = useParams();
  const [userTweets, setUserTweet] = useState([]);

  const userDataUrl = `http://localhost:3000/api/tweets/${userName}/tweets`;

  useEffect(() => {
    const loadUserData = async () => {
      // setIsLoading(true);
      try {
        const data = await fetchUserData(userDataUrl);
        setUserTweet(data); 
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // setIsFailed(true);
      } finally {
        // setIsLoading(false);
      }
    };

    loadUserData();
  },[userName]);

  return (
    <main className="timeline">
      <Header pageTitle={"Profile"} />
      {isLoading ?  <Loading /> : <ProfileHero />}
      <ProfileNavbar />
      {isLoading ? <Loading /> : <Tweets tweetData={userTweets} />}
      {isFailed && <ReloadData />}
    </main>
  );
}

export default Profile;
