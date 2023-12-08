import { ProfileInfo, ProfilePicture } from "../index";
import { useParams } from "react-router-dom/dist";
import { tweetData } from "../../utils/tweet-data";

function ProfileHero() {

  const { userName } = useParams() ;
  const data = tweetData ;
  const user = data.find((user) => user.userName === userName) ;

  return (
    <>
      <section className="hero-section">
        <ProfilePicture imgSrc={user.tweetAvatarUrl} />
      </section>
      <ProfileInfo userName={user.userName} userTitle={user.author} />
    </>
  );
}

export default ProfileHero ;
