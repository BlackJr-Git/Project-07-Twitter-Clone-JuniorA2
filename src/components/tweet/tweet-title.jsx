// import { TweetTitleAuthor,TweetTitleDetails } from "../components";

function TweetTitle({Author}) {
    return (
        <div className="tweet-title">
            <p className="tweet-title-author"> {Author} </p>
            <p className="tweet-title-details">{userName} . {time} </p>
        </div>
    )
}

export default TweetTitle ; 