import { Header, ProfileHero, Tweets } from "../components";
import { tweetData } from "../utils/tweet-data";
import { useParams } from "react-router-dom/dist";
import { userData } from "../utils/user-data";
import getTweet from "../utils/get-data";
import getData from "../utils/get-data";

function Profile() {

    function getData() {
        fetch("../utils/initial-data")
          .then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then(data => console.log(data))
          .catch(error => console.error('Error fetching data:', error));
    }
    getData()

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