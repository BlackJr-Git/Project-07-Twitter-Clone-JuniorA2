import { Header, ProfileHero, Tweets } from "../components";
import { tweetData } from "../utils/tweet-data";
import { useParams } from "react-router-dom/dist";
import { userData } from "../utils/user-data";


function Profile() {

    const { userName } = useParams() ;
    const data = tweetData ;
    let user ;

    if (userName) {
        user = data.find((user) => user.userName === userName) ; 
    } 
    if (userName === 'undefined') {
        user = userData
    } 
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