import TweetContext from "./tweet-contexts";
import React, { useState } from "react";
// import { tweetData } from "../utils/tweet-data" ;
import { fetchData } from "../utils/fetch-data";



const tweetList = await fetchData() 
const localTweetlist = [...tweetList.tweets]

const TweetProvider = ({ children }) => {
    const [tweetData, setTweetData] = useState(localTweetlist);
  
    const updateTweetData = (newData) => {
      setTweetData(newData);
    };

    return (
      <TweetContext.Provider value={{ data: tweetData, updateTweetData }}>
        {children}
      </TweetContext.Provider>
    );
  };
  
  export default TweetProvider ; 
