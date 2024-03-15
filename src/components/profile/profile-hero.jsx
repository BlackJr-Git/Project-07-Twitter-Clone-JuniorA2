import { ProfileInfo, ProfilePicture, Loading } from "../index";
import { useParams } from "react-router-dom/dist";
import { useState, useEffect } from "react";
import fetchUserData from "../../utils/fetch-user-data";
import { dateFormattter } from "../../utils";

function ProfileHero() {
  const [userData, setUserData] = useState({});
  const { userName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const tweetUserData = `https://twitter-api-6zi0.onrender.com/api/user/userName/${userName}`;

  useEffect(() => {
    const loadUserData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchUserData(tweetUserData);
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // setIsFailed(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, [userName]);

  const user = userData;

  const backgroundStyles = {
    background: `url(${user.profileBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section className="hero-section" style={backgroundStyles}>
            <ProfilePicture imgSrc={user.profilePicture} />
          </section>
          <ProfileInfo
            date={dateFormattter(user.createdAt)}
            link={user.website}
            location={user.location}
            userName={user.handle}
            userTitle={user.name}
            followersAccount={user.followersCount}
            followingAcccount={user.followingCount}
            bio={user.bio}
          />
        </>
      )}
    </>
  );
}

export default ProfileHero;
