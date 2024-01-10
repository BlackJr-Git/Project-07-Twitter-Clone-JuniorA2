import { Header, ProfileHero, Tweets } from "../components";
import { tweetData } from "../utils/tweet-data";
import { useParams } from "react-router-dom/dist";

function Profile() {

    const { userName } = useParams() ;
    const data = tweetData ;
    const user = data.find((user) => user.userName === userName) 

    const tweetsOfUser = tweetData.filter(tweet => tweet.userName === user.userName);

    return (
        <main className="timeline">
            <Header pageTitle={"Profile"} />
            <ProfileHero />
            <Tweets tweetData={tweetsOfUser} />
        </main>
    )
}


export default Profile ;