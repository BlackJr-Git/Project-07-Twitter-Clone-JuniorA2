import TweetContext from "./tweet-contexts";
import React, { useState } from "react";
import { tweetData } from "../utils/tweet-data";

const tweetList = tweetData 

const TweetProvider = ({ children }) => {
    const [tweetData, setTweetData] = useState(tweetList);
  
    const updateTweetData = (newData) => {
      setTweetData(newData);
    };
  
    return (
      <TweetContext.Provider value={{ data: tweetData, updateTweetData }}>
        {children}
      </TweetContext.Provider>
    );
  };
  
  export default TweetProvider; 
