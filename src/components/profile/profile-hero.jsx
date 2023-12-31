import { ProfileInfo, ProfilePicture } from "../index";
import { useParams } from "react-router-dom/dist";
import { tweetData } from "../../utils/tweet-data";
import { userData } from "../../utils/user-data" ;
import {profileBackground} from "../../images" ;

function ProfileHero() {
  const backgroundStyles = {
    background: `url(${profileBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const { userName } = useParams() ;
  const data = tweetData ;
  const user = data.find((user) => user.userName === userName) ;
  if (user) {
    return (
      <>
        <section className="hero-section" style={backgroundStyles}>
          <ProfilePicture imgSrc={user.tweetAvatarUrl} />
        </section>
        <ProfileInfo userName={user.userName} userTitle={user.author} />
      </>
    );
  } else {
    return (
      <>
        <section className="hero-section" style={backgroundStyles}>
          <ProfilePicture imgSrc={userData.tweetAvatarUrl} />
        </section>
        <ProfileInfo userName={userData.userName} userTitle={userData.author} />
      </>
    )
  }
   
}

export default ProfileHero ;
