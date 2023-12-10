import { twitterAvatar , nytimesAvatar ,cnnAvatar, tweetImage } from "../images" ;

function incrementLike() {
  this.react = this.react  + 1 
  return this.react
}

function incrementRetweet() {
  this.retweet = this.retweet  + 1 
  return this.retweet
}



const tweetData = [
  {
    id: 1,
    tweetAvatarUrl: cnnAvatar,
    author: "CNN",
    userName: "@cnn",
    time: "7m",
    tweetText:
      "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
    tweetImageUrl: "",
    reply: 57,
    retweet: 144,
    react: 184,
    incrementLike : incrementLike,
    incrementRetweet : incrementRetweet
  },
  {
    id: 2,
    tweetAvatarUrl: nytimesAvatar ,
    author: "The New York Times",
    userName: "@nytimes",
    time: "2h",
    tweetText:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    tweetImageUrl: tweetImage,
    reply: 19,
    retweet: 48,
    react: 482,
    incrementLike : incrementLike,
    incrementRetweet : incrementRetweet
  },
  {
    id: 3,
    tweetAvatarUrl: twitterAvatar,
    author: "Twitter",
    userName: "@twitter",
    time: "Oct 29",
    tweetText: "BIG NEWS lol jk still Twitter",
    tweetImageUrl: "",
    reply: "6.8K",
    retweet: "36.6K",
    react: "267.1K",
    incrementLike : incrementLike,
    incrementRetweet : incrementRetweet
  },
  {
    id: 4,
    tweetAvatarUrl: twitterAvatar,
    author: "Twitter",
    userName: "@twitter",
    time: "Oct 4",
    tweetText: "hello literally everyone",
    tweetImageUrl: "",
    reply: "118.7K",
    retweet: "785.4K",
    react: "3.3M",
    incrementLike : incrementLike,
    incrementRetweet : incrementRetweet
  },
  {
    id: 5,
    tweetAvatarUrl: twitterAvatar,
    author: "Twitter",
    userName: "@twitter",
    time: "Oct 4",
    tweetText: "hello literally everyone",
    tweetImageUrl: tweetImage,
    reply: "34K",
    retweet: "247.7K",
    react: "1.7M",
    incrementLike : incrementLike,
    incrementRetweet : incrementRetweet
  },
];


export { tweetData };
