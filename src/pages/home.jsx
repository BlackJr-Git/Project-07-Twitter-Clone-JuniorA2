import { useState, useContext } from "react";
import { Header, Tweets , TweetEditor, ReloadData , Loading } from "../components";
import TweetContext from "../contexts/tweet-contexts";

function Home() {
  const { data, isLoading, isFailed } = useContext(TweetContext);
  const [reload , setReload ] = useState(true)
  function reloadComponent() {
    setReload(!reload)
  }

  // useEffect(() => {
  //   console.log('Le composant a rendu');
  // }, [reload])

  return (
    <main className="timeline">
      <Header pageTitle={"Home"} />
      <TweetEditor />

      {isLoading ? <Loading /> : <Tweets tweetData={data} />}
      {isFailed && <ReloadData reloadPage={reloadComponent} />}
    </main>
  );
}

export default Home;
