import { TweetTitle } from "..";

function TweetBody({ texte, imgsrc }) {
  if (imgsrc) {
    return (
      <div className="tweet-body">
        <TweetTitle />
        <p className="tweet-text"> {texte} </p>

        <div className="tweet-image">
          <img src={imgsrc} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="tweet-body">
        <TweetTitle />
        <p className="tweet-text"> {texte} </p>
      </div>
    );
  }
}

export default TweetBody;
