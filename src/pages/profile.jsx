import { Header, ProfileHero, Tweets } from "../components";
import { tweetData } from "../utils/tweet-data";

function Profile() {
    return (
        <main className="timeline">
            <Header pageTitle={"Profile"} />
            <ProfileHero />
            <Tweets tweetData={tweetData} />
        </main>
    )
}


export default Profile ;