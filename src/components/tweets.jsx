import { Tweet } from "../components"
import { tweetData } from "../utils/tweet-data";

function Tweets() {
  return (
    <div>
      {tweetData.map(tweet => (
        <Tweet tweetData={tweet} key={tweet.id} />
      ))}
    </div>
  );
}

  export default Tweets;