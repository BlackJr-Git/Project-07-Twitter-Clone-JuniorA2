import React from 'react';
import { Header, Tweets } from '../components';
import  { TweetEditor } from '../components';
// import { tweetData } from "../utils/tweet-data";
import TweetContext from '../contexts/tweet-contexts';
import { useContext } from 'react';

function Home() {
  const { data } = useContext(TweetContext) 
  return (
    <main className="timeline">
      <Header pageTitle={'Home'} />
      <TweetEditor />
      <Tweets tweetData={data}  />
    </main>
  );
}

export default Home;