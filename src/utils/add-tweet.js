import { bradleyAvatar } from "../images"

function incrementLike() {
    if (this.isLiked == false) {
      this.react = this.react  + 1 
      this.isLiked = true 
      return this.react
    } else {
      this.react = this.react - 1
      this.isLiked = false  
      return this.react
    }
  }
  
function incrementRetweet() {
    if (this.isLiked == false) {
      this.retweet = this.retweet  + 1 
      this.isLiked = true 
      return this.retweet
    } else {
      this.retweet = this.retweet - 1
      this.isLiked = false  
      return this.retweet
    }
  }

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
        incrementLike : incrementLike,
        incrementRetweet : incrementRetweet
    } 

    // tweetData.push(newTweet) ;
    // return tweetData ;
    return newTweet
} 

export  { addTweet } ; 