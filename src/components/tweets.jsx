import { Tweet } from "../components"

function Tweets({tweetData}) {
  
  return (
    <div className="tweets">
      {tweetData.map(tweet => (
        <Tweet tweetData={tweet} key={tweet.id} />
      )).reverse()}
    </div>
  );
}
  export default Tweets ;