import { Header, ProfileHero, Tweets } from "../components";
import { useParams } from "react-router-dom/dist";
import { useContext } from "react";
import TweetContext from "../contexts/tweet-contexts";
import UserContext from "../contexts/user-context";
import Loading from "../components/loading";
import ReloadData from "../components/reload-data";

function Profile() {
  const { data, isLoading , isFailed } = useContext(TweetContext);
  const { currentUser } = useContext(UserContext);
  const { userName } = useParams();

  let user = data.find((user) => user.userName === userName);
  {
    user ? user : (user = currentUser);
  }

  const tweetsOfUser = data.filter((tweet) => tweet.userName === user.userName);

  return (
    <main className="timeline">
      <Header pageTitle={"Profile"} />
      <ProfileHero />
      {isLoading ? <Loading /> : <Tweets tweetData={tweetsOfUser} />}
      {isFailed && <ReloadData /> }
    </main>
  );
}

export default Profile;
