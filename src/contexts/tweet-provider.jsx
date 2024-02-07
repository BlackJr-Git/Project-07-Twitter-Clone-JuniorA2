import TweetContext from "./tweet-contexts";
import React, { useEffect, useState } from "react";
// import { tweetData } from "../utils/tweet-data" ;
import { fetchData } from "../utils/fetch-data";


const tweetList = await fetchData() 
// const tweetLists = [...tweetData]
// let localTweetlist ;

const TweetProvider = ({ children }) => {
  // console.log(tweetList);
    let data = tweetList
    
    const [tweetData, setTweetData] = useState(data) ;
  
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
