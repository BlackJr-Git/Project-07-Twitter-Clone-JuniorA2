import { Header, ProfileHero, Tweets } from "../components";
// import { tweetData } from "../utils/tweet-data";
import { useParams } from "react-router-dom/dist";
import { userData } from "../utils/user-data" ; 
import TweetContext from "../contexts/tweet-contexts";
import { useContext } from "react";


function Profile() {
    const { data } = useContext(TweetContext) 
    const { userName } = useParams() ;
    let user ;

    if (userName) {
        user = data.find((user) => user.userName === userName) ; 
    } 

    const tweetsOfUser = data.filter(tweet => tweet.userName === user.userName) ; 

    return (
        <main className="timeline">
            <Header pageTitle={"Profile"} />
            <ProfileHero />
            <Tweets tweetData={tweetsOfUser} />
        </main>
    )
}


export default Profile ;