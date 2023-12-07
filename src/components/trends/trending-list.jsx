import { Trend ,TrendListTitle,ShowMore } from "../index";

function TrendingList() {
  return (
    <div className="trending-list">
      <TrendListTitle />
      <Trend trendCountry={"Turkey"} trendSubject={"#SQUID"} />
      <Trend trendCountry={"USA"} trendSubject={"#GoT"} />
      <Trend trendCountry={"England"} trendSubject={"#GTA VI"} />
      <Trend trendCountry={"Japan"} trendSubject={"#jjk"} />
      <Trend trendCountry={"DR Congo"} trendSubject={"#Election2023"} />
      <ShowMore />
    </div>
  );
}

export default TrendingList;
