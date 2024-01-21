import TweetContext from "./tweet-contexts";
import React, { useEffect, useState } from "react";
import { tweetData } from "../utils/tweet-data" ;
import { fetchData } from "../utils/fetch-data";



// const tweetList = await fetchData() 
// const localTweetlist = [...tweetList.tweets]
const tweetLists = [...tweetData]
let localTweetlist ;

const TweetProvider = ({ children }) => {
    // useEffect (() => {
    //   const tweetList = fetchData() 
    //   localTweetlist = [...tweetList.tweets]
    //   console.log(localTweetlist);
    // },[])
    
    const [tweetData, setTweetData] = useState(tweetLists) ;
  
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
