import { Tweet } from "../components"

function Tweets({tweetData}) {
  
  return (
    <div>
      {tweetData.map(tweet => (
        <Tweet tweetData={tweet} key={tweet.id} />
      ))}
    </div>
  );
}
  export default Tweets ;