// import { createContext } from "react";
// import { tweetData } from "../utils/tweet-data" ; 
import React, { createContext, useState } from 'react';



const TweetContext = createContext({
    data : null ,
    // updateTweetData : updateTweetData , 
    // tweets : tweets
});




export default TweetContext;




// const TweetContext = createContext();

// export const useTweetContext = () => {
//   return useContext(TweetContext);
// };

// export const TweetProvider = ({ children }) => {
//   const [tweets, setTweets] = useState([]);

//   const addTweet = (newTweet) => {
//     setTweets((prevTweets) => [newTweet, ...prevTweets]);
//   };

//   return (
//     <TweetContext.Provider value={{ tweets, addTweet }}>
//       {children}
//     </TweetContext.Provider>
//   );
// };
