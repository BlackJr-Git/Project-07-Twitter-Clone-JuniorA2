import React from 'react';
import { Header, Tweets } from '../components';
import  { TweetEditor } from '../components';
import { tweetData } from "../utils/tweet-data";

function Home() {
  return (
    <main className="timeline">
      <Header pageTitle={'Home'} />
      <TweetEditor />
      <Tweets tweetData={tweetData}  />
    </main>
  );
}

export default Home;