import { useState } from "react";
import { useContext } from "react";
import { TweetEditorInput , TweetEditorButtons   } from "..";
// import { } from "..";
import { addTweet } from "../../utils/add-tweet";
import TweetContext from "../../contexts/tweet-contexts";


function TweetEditorForm({}) {
  const {data , updateTweetData} = useContext(TweetContext)  
  
  const [tweet , setTweet] = useState('')
  
  const handleClick = (e) => {
    e.preventDefault() ;
    if (tweet.trim() !== "") {
      let tweetAdded = addTweet(data, tweet) 
      updateTweetData([tweetAdded ,...data ]) ;  
    } 
    setTweet("")
  }

  const handleTextChange = (e) => {
    setTweet(e.target.value) 
  }

  return (
    <div className="tweet-editor-form">
      <TweetEditorInput getTweetText={handleTextChange} tweet={tweet} />
      <TweetEditorButtons handleClick={handleClick} />
    </div>
  );
}

export default TweetEditorForm ; 
