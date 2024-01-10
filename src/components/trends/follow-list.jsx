import { AccountFollow, ShowMore } from "../index";
import { twitterAvatar , nytimesAvatar ,cnnAvatar } from "../../images" ;
import { tweetData } from "../../utils/tweet-data";


function FollowList() {
    return (
        <div className="follow-list">
            <h3>Who to follow</h3>
            <AccountFollow userTitle={"New-York"} userName={"@nytimes"} imgSrc={nytimesAvatar} tweetData={tweetData[1].userName}/>
            <AccountFollow userTitle={"CNN"} userName={"@cnn"} imgSrc={cnnAvatar} tweetData={tweetData[0].userName} />
            <AccountFollow userTitle={"Twitter"} userName={"@twitter"} imgSrc={twitterAvatar} tweetData={tweetData[3].userName}/>
            <ShowMore />
        </div>
    )
}
 
export default FollowList ; 