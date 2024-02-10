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
    
    let user = data.find((user) => user.userName === userName) ; 
    {user ?  user : user = currentUser ; }

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