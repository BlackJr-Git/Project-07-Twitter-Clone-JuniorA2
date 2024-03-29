import { Link } from "react-router-dom/dist";


function TweetAvatar({imgSrc,tweetData}) {
    return (
        <Link to={`/${tweetData}`} >
            <div className="tweet-avatar"> 
                <img src= {imgSrc} alt="avatar" />
            </div>
        </Link>
    )
}

export default TweetAvatar ; 