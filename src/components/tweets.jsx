import { Tweet } from "../components"

function Tweets({tweetData}) {
  const tweetDataCopy = [...tweetData] 
  return (
    <div>
      {tweetDataCopy.map(tweet => (
        <Tweet tweetData={tweet} key={tweet.id} />
      ))}
    </div>
  );
}
  export default Tweets;