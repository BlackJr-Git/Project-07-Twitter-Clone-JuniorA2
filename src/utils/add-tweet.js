
let now = new Date()

function addTweet(tweet , currentUser) {
    let newTweet = {
        "author": currentUser.id,
        "media": [],
        "retweetCount": 0,
        "favoriteCount": 0,
        "repliesCount": 0,
        "text": tweet ,
        "createdAt": now.toUTCString(),
    } 
    return newTweet
} 

export  { addTweet } ; 