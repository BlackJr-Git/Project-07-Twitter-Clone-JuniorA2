import { Header, ProfileHero, Tweets } from "../components";
import { tweetData } from "../utils/tweet-data";

function Profile() {

    const user = '@twitter' ;
    const tweetsOfUser = tweetData.filter(tweet => tweet.userName === user);

    return (
        <main className="timeline">
            <Header pageTitle={"Profile"} />
            <ProfileHero />
            <Tweets tweetData={tweetsOfUser} />
        </main>
    )
}


export default Profile ;