import { bradleyAvatar } from "../images"

function addTweet(tweetData, tweet) {
    
    const lastTweet = tweetData.length - 1 
    let key = tweetData[lastTweet].id + 1 
    let newTweet = {
        id : key ,
        tweetAvatarUrl: bradleyAvatar,
        author: "Bradley Ortiz",
        userName: "@bradley_",
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