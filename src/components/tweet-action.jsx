
function TweetAction({imgsrc, actionCount}) {
    return (
        <div className="tweet-action">
            <img src={imgsrc} alt="" /> 
            <p>{actionCount}</p>
        </div>
    )
}

export default TweetAction;