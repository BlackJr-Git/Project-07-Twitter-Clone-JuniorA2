import React from 'react';
import { Header, Tweets } from '../components';
import  { TweetEditor } from '../components';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
  );
}

export default Home;