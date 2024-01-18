import { twitterAvatar , nytimesAvatar ,cnnAvatar, tweetImage, bradleyAvatar } from "../images" ;


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
    isLiked : false,
    isRetweet : false,
    likeIcone : 'heart-outline'
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
    isLiked : false,
    isRetweet : false,
    likeIcone : 'heart-outline'
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
    isLiked : false,
    isRetweet : false,
    likeIcone : 'heart-outline'
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
    isLiked : false,
    isRetweet : false,
    likeIcone : 'heart-outline'
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
    isLiked : false,
    isRetweet : false,
    likeIcone : 'heart-outline'
  },
  {
    id: 6,
    tweetAvatarUrl: bradleyAvatar ,
    author: "Bradley Ortiz",
    userName: "@bradley_",
    time: "Jan 10",
    tweetText: "Hi I'm your new community manager",
    tweetImageUrl: '' ,
    reply: "34K",
    retweet: "247.7K",
    react: "1.7M",
    isLiked : false,
    isRetweet : false,
    likeIcone : 'heart-outline'
  },
];


export { tweetData };
