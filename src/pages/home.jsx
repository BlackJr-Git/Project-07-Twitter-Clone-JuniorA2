import React from "react";
import { Header, Tweets } from "../components";
import { TweetEditor } from "../components";
import TweetContext from "../contexts/tweet-contexts";
import { useContext } from "react";
import Loading from "../components/loading";
import ReloadData from "../components/reload-data";

function Home() {
  const { data, isLoading , isFailed } = useContext(TweetContext);
  return (
    <main className="timeline">
      <Header pageTitle={"Home"} />
      <TweetEditor />

      {isLoading ? <Loading /> : <Tweets tweetData={data} />}
      {isFailed && <ReloadData /> }
    </main>
  );
}

export default Home;
