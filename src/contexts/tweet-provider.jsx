// import TweetContext from "./tweet-contexts";
// import React, { useEffect, useState } from "react";
// import { fetchData } from "../utils/fetch-data";

// const tweetList = await fetchData()

// const TweetProvider = ({ children }) => {
//     let data = tweetList

//     const [tweetData, setTweetData] = useState(data) ;

//     const updateTweetData = (newData) => {
//       setTweetData(newData);
//     };
//     return (
//       <TweetContext.Provider value={{ data: tweetData, updateTweetData }}>
//         {children}
//       </TweetContext.Provider>
//     );
//   };

//   export default TweetProvider ;

import TweetContext from "./tweet-contexts";
import React, { useEffect, useState } from "react";
// import { tweetData } from "../utils/tweet-data" ;
import { fetchData } from "../utils/fetch-data";

const TweetProvider = ({ children }) => {
  const [tweetData, setTweetData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    const loadTweetData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData();
        setTweetData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsFailed(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadTweetData();
  }, []);

  return (
    <TweetContext.Provider
      value={{
        data: tweetData,
        updateTweetData: setTweetData,
        isLoading,
        isFailed,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
