import { Tweet } from "../components"


function Tweets() {
    return (
      <>
        <Tweet 
          author={"CNN"}
          authorUserName={"@cnn"}
          tweetTime={"7m"}
          tweetAvatar={"src\\images\\tweet-profile-photo.png"}
          tweetText={'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.'}
          reply = {"57"} retweet={"144"} react={"184"}
        />

        <Tweet 
          author={"The New-York Times"}
          tweetTime={"2h"}
          authorUserName={"@thenewyorktimes"}
          tweetAvatar={"src\\images\\image 1.png"}
          tweetImage={"src\\images\\tweet-image.png"} 
          tweetText={"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land."}  
          reply = {"19"} retweet={"48"} react={"482"}
        />

        <Tweet 
          author={"Twitter"}
          authorUserName={"@twitter"}
          tweetTime={"Oct 29"}
          tweetAvatar={"src\\images\\avatar-tweeter.png"}
          tweetText={"BIG NEWS lol jk still Twitter"}
          reply = {"6.8K"} retweet={"36.6K"} react={"267.1K"} 
        />

        <Tweet 
          author={"Twitter"}
          authorUserName={"@twitter"}
          tweetTime={"Oct 4"}
          tweetAvatar={"src\\images\\avatar-tweeter.png"}
          tweetText={"hello literally everyone"}
          reply = {"118.7K"} retweet={"787.4K"} react={"3.3M"}
        />

        <Tweet 
          author={"Twitter"}
          authorUserName={"@twitter"}
          tweetTime={"Oct 4"}
          tweetAvatar={"src\\images\\avatar-tweeter.png"}
          tweetText={"hello literally everyone"} 
          tweetImage={"src\\images\\tweet-image.png"}
          reply = {"34K"} retweet={"247.7K"} react={"1.7M"} 
        />
      </>
    )
}

  export default Tweets;