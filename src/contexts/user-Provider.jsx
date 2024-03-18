// import React, { useEffect, useState } from "react";
// import { fetchData } from "../utils/fetch-data";
import UserContext from "./user-context";
import { userData } from "../data/user-data";

// const tweetList = await fetchData()  

const UserProvider = ({ children }) => {
    // let data = tweetList
    
    // const [tweetData, setTweetData] = useState(data) ;
  
    // const updateTweetData = (newData) => {
    //   setTweetData(newData);
    // };

    return (
      <UserContext.Provider value={{ currentUser : userData }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserProvider ; 
