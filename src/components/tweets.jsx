import { Tweet } from "../components"

function Tweets({tweetData}) {
  
  return (
    <div>
      {tweetData.map(tweet => (
        <Tweet tweetData={tweet} key={tweet.id} />
      )).reverse()}
    </div>
  );
}
  export default Tweets ;