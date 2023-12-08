import { Header, ProfileHero, Tweets } from "../components";
import { useParams } from "react-router-dom/dist";
import { tweetData } from "../utils/tweet-data";

function Profile() {
    return (
        <main className="timeline">
            <Header pageTitle={"Profile"} />
            <ProfileHero />
            <Tweets />
        </main>
    )
}


export default Profile ;