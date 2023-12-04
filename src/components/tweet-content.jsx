import { TweetAction } from "../components";

function TweetContent({
  texte,
  imgsrc,
  author,
  userName,
  time,
  reply,
  retweet,
  react,
}) {
    return (
      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            <p className="tweet-title-author"> {author} </p>
            <img src="src\images\Icons\Verified.png" alt="verfied icon" />
            <p className="tweet-title-details">
              {userName} . {time}
            </p>
          </div>

          <p className="tweet-text"> {texte} </p>

          {imgsrc &&  <div className="tweet-image">
                                    <img src= {imgsrc} alt="" />
                                </div> 
                    }
        </div>

        <div className="tweet-actions">
          <TweetAction
            imgsrc={"src\\images\\Icons\\Reply.png"}
            actionCount={reply}
            className={'tweet-action tweet-reply'}
          />
          <TweetAction
            imgsrc={"src\\images\\Icons\\Retweet.png"}
            actionCount={retweet}
            className={'tweet-action tweet-retweet'}
          />
          <TweetAction
            imgsrc={"src\\images\\Icons\\React.png"}
            actionCount={react}
            className={'tweet-action tweet-react'}
          />
          <TweetAction
            imgsrc={"src\\images\\Icons\\Share.png"}
            actionCount={null}
            className={"tweet-action"}
          />
        </div>
      </div>
    );
  
}

export default TweetContent;
