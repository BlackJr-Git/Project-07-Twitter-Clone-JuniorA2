import { Header, ProfileHero, Tweets } from "../components";
// import { tweetData } from "../utils/tweet-data";
import { useParams } from "react-router-dom/dist";
// import { userData } from "../utils/user-data" ; 
import { useContext } from "react";
import TweetContext from "../contexts/tweet-contexts";
import UserContext from "../contexts/user-context";


function Profile() {
    const { data } = useContext(TweetContext) 
    const { currentUser } = useContext(UserContext) 
    const { userName } = useParams() ;
    let user ;

    if (userName) {
        user = data.find((user) => user.userName === userName) ;  
    } else {
        user = currentUser ;
    }

    const tweetsOfUser = data.filter(tweet => tweet.userName === user.userName) ;  

    return (
        <main className="timeline">
            <Header pageTitle={"Profile"} />
            <ProfileHero />
            { tweetsOfUser ? <Tweets tweetData={tweetsOfUser} /> : <Tweets /> }
        </main>
    )
}


export default Profile ;