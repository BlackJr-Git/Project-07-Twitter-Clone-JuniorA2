
import {TweetAction } from "../components"

function TweetContent({texte, imgsrc,author, userName, time , reply, retweet, react}) {
            
    if (imgsrc){
        return (
            
            <div className="tweet-content">
                <div className="tweet-body">
                    
                    <div className="tweet-title">
                        <p className="tweet-title-author"> {author} </p>
                        <img src="src\images\Icons\Verified.png" alt="verfied icon" />
                        <p className="tweet-title-details">{userName} . {time}</p>
                    </div>

                    <p className="tweet-text"> {texte} </p>
                        
                    <div className="tweet-image">
                        <img src= {imgsrc} alt="" />
                    </div>
                </div>
                
                <div className="tweet-actions">
                    <TweetAction imgsrc={"src\\images\\Icons\\Reply.png"} actionCount={reply} />
                    <TweetAction imgsrc={"src\\images\\Icons\\Retweet.png"} actionCount={retweet} />
                    <TweetAction imgsrc={"src\\images\\Icons\\React.png"} actionCount={react} />
                    <TweetAction imgsrc={"src\\images\\Icons\\Share.png"} actionCount={null} />
                </div>
            </div>
        )
    } else {
        return (
            <div className="tweet-content">
                <div className="tweet-body">
                    
                    <div className="tweet-title">
                        <p className="tweet-title-author"> {author} </p>
                        <img src="src\images\Icons\Verified.png" alt="verfied icon" />
                        <p className="tweet-title-details">{userName} . {time}</p>
                    </div>

                    <p className="tweet-text"> {texte} </p>
                </div>
                
                <div className="tweet-actions">
                    <TweetAction imgsrc={"src\\images\\Icons\\Reply.png"} actionCount={reply} />
                    <TweetAction imgsrc={"src\\images\\Icons\\Retweet.png"} actionCount={retweet} />
                    <TweetAction imgsrc={"src\\images\\Icons\\React.png"} actionCount={react} />
                    <TweetAction imgsrc={"src\\images\\Icons\\Share.png"} actionCount={null} />
                </div>
            </div>
        ) }
}  

export default TweetContent ;