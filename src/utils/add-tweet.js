import { bradleyAvatar } from "../images" 

function addTweet(tweetData, tweet , currentUser) {
    
    const lastTweet = tweetData.length - 1 
    let key = tweetData[lastTweet].id + 1 
    let newTweet = {
        id : key ,
        tweetAvatarUrl: currentUser.tweetAvatarUrl,
        author: currentUser.author,
        userName: currentUser.userName,
        time: "1m",
        tweetText: tweet ,
        tweetImageUrl: "",
        reply: 0,
        retweet: 0,
        react: 0,
        isLiked : false,
        isRetweet : false,
        likeIcone : 'heart-outline'
    } 
    return newTweet
} 

export  { addTweet } ; 